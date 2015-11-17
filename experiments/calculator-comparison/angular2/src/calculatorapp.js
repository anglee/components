import {ComponentAnnotation as Component, ViewAnnotation as View, EventEmitter, Attribute, bootstrap, NgIf, NgFor} from 'angular2/angular2';

var OPERATORS = [
    { symbol: "+", name: "Sum", fn: function (a, b) {
        return a + b;
    }},
    { symbol: "-", name: "Difference", fn: function (a, b) {
        return a - b;
    }},
    { symbol: "%", name: "Modulo", fn: function (a, b) {
        return a % b;
    }},
    { symbol: "foo", name: "Foo", fn: function (a, b) {
        return a + b;
    }}
];

//==== <selector>
@Component({
    selector: 'selector',
    events: ['itemselected']
})
@View({
    directives: [NgFor],
    template: `
    <select (change)="selectionChanged($event)">
        <option *ng-for="var item of items"
        [selected]="item == currentItem">{{item.symbol}}</option>
    </select>
    `
})
class Selector {
    name: string;

    constructor() {
        this.items = OPERATORS;
        this.itemselected = new EventEmitter();
        this.selectionChanged = function (event) {
            this.currentItem = this.items.find(it => it.symbol == event.target.value );
            this.itemselected.next();
        }
    }
}

//==== <calculator>
@Component({
    selector: 'calculator',
    events: ['resultupdated'],
    properties: ['operanda', 'operandb']
})
@View({
    directives: [Selector],
    template: `
        <div>
            <input #_operand_a_input
                [value]="operanda"
                (keyup)="handleOperandAChanged($event)" ></input>
            <selector #_operator_selector
                [currentItem]="operator"
                (itemselected)="handleOperatorSelected(_operator_selector.currentItem)"></selector>
            <input #_operand_b_input
                [value]="operandb"
                (keyup)="handleOperandBChanged($event)" ></input>
        </div>
        <div>
        {{operator.name}} of {{_operand_a_input.value}} and {{_operand_b_input.value}} is : {{getResult()}}
        </div>
    `
})
class Calculator {
    result: number;
    operanda: string="1";
    operandb: string="1";
    operator: any=OPERATORS[0];
    resultupdated: any;
    constructor() {
        this.resultupdated = new EventEmitter();
        this.handleOperandAChanged = function (event) {
            this.operanda = event.target.value;
        };
        this.handleOperandBChanged = function (event) {
            this.operandb = event.target.value;
        };
        this.handleOperatorSelected = function (op) {
            this.operator = op;
        };
        this.getResult= function () {
            var result = this.operator.fn(parseInt(this.operanda), parseInt(this.operandb));
            if (result !== this.result) {
                this.result = result;
                this.resultupdated.next();
            }
            return result;
        };
    };
}

//==== <calculator-app>
@Component({
    selector: 'calculator-app'
})
@View({
    directives: [Calculator],
    template: `
        <calculator #calc1 (resultupdated)="handleCalc1ResultUpdated(calc1.result)" ></calculator>
        <calculator #calc2 (resultupdated)="handleCalc2ResultUpdated(calc2.result)" ></calculator>
        <calculator #calc3 [operanda]="r1" [operandb]="r2"></calculator>
    `
})
class CalculatorApp {
    name: string;

    constructor() {
        this.r1 = "2";
        this.r2 = "2";
        this.handleCalc1ResultUpdated = function (result) {
            this.r1 = result;
        };
        this.handleCalc2ResultUpdated = function (result) {
            this.r2 = result;
        };
    }
}


// Polyfill Array.find
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

bootstrap(CalculatorApp);
