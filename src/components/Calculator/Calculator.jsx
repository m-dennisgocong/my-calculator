import { useState } from "react";
import Buttons from "./Buttons";

const Formula = ({formula}) => {
    return <div id="formula">{formula}</div>
}

const Screen = ({currentVal}) => {
    return <div id="display">{currentVal}</div>
}

const Calculator = () => {

    const isOperator = /[x/+-]/;
    const endsWithOperator = /[x+-/]$/;
    
    const initialState = {
        currentVal: '0',
        prevVal: '0',
        formula: '',
        currentSign: 'pos',
        lastClicked: ''
    }

    const [tally, setTally] = useState(initialState);

    const maxDigitWarning = () => {
        setTally({...tally, prevVal: tally.currentVal,currentVal: 'Digit Limit Reached'});
        setTimeout(()=> setTally(updateTally => ({...updateTally, currentVal: updateTally.prevVal})), 1200);
    }

    const handleNumbers = (e) => {
        if(tally.currentVal.indexOf('Limit') == -1){
            setTally({...tally, lastClicked: 'num'});
            if(tally.currentVal.length > 21){
                console.log(tally.currentVal.length);
                maxDigitWarning();
            }
            else if(tally.lastClicked == 'CE' && tally.formula !== ''){
                setTally({...tally, currentVal :!endsWithOperator.test(tally.formula) ?
                    tally.formula.match(/(-?\d+\.?\d*)$/)[0] + e.target.value : e.target.value,
                    formula: tally.formula += e.target.value 
                });
            }
            else if(tally.formula.indexOf('=') != -1){
                setTally({...tally, currentVal: e.target.value, formula: e.target.value != '0' ? 
                    e.target.value : ''
                });
            }
            else{
                setTally({...tally, currentVal: tally.currentVal == '0' || isOperator.test(tally.currentVal) ? 
                    e.target.value : tally.currentVal + e.target.value,
                    formula: tally.currentVal == '0' && e.target.value == '0' ?
                    tally.formula : /([^.0-9]0)$/.test(tally.formula) ?
                    tally.formula.slice(0, -1) + e.target.value : tally.formula + e.target.value,
                })
            }
        }
    }
    const lockOperators = (formula, currentVal) => {
        return formula.lastIndexOf('.') == formula.length - 1 || 
        formula.lastIndexOf('-') == formula.length - 1 || 
        currentVal.indexOf('Reached') != -1;
    }
    const handleOperators = (e) => {
        if (!lockOperators(tally.formula, tally.currentVal)) {
          if (tally.formula.lastIndexOf('(') > tally.formula.lastIndexOf(')')) {
            setTally({ ...tally,
              formula: tally.formula + ')' + e.target.value,
              prevVal: tally.formula + ')'
            });
          } else if (tally.formula.indexOf('=') != -1) {
            setTally({...tally,
              formula: tally.prevVal + e.target.value
            }); 
          } else {
            setTally({...tally, 
              prevVal: !isOperator.test(tally.currentVal) ?
                tally.formula : tally.prevVal,
              formula: !isOperator.test(tally.currentVal) ?
                tally.formula += e.target.value : tally.prevVal += e.target.value
            });
          } // operator defaults:
          setTally({...tally,
            currentSign: 'pos',
            currentVal: e.target.value,
            lastClicked: 'operator'
          });
        }
    }

    const handleDecimal = () => {
      if (tally.currentVal.indexOf('.') == -1 && tally.currentVal.indexOf('Limit') == -1) {
        setTally((updateTally)=>({...updateTally, lastClicked: updateTally.lastClicked == 'CE' ? 'CE' : 'decimal'})) 
        if (tally.currentVal.length > 21) {
          maxDigitWarning();
        } else if (tally.lastClicked == 'evaluated' || endsWithOperator.test(tally.formula) || tally.currentVal == '0' && tally.formula === '' || /-$/.test(tally.formula)) {
          setTally((updateTally)=>({...updateTally,
            currentVal: '0.',
            formula: updateTally.lastClicked == 'evaluated' ? '0.' : updateTally.formula + '0.'
          }));
        } else if (tally.formula.match(/(\(?\d+\.?\d*)$/)[0].indexOf('.') > -1) { 
        } else {
          setTally((updateTally)=>({...updateTally,
            currentVal: updateTally.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
            formula: updateTally.formula + '.',
          }))
        }
      }
    }

    const handleEvaluate = () => {
        if (!lockOperators(tally.formula, tally.currentVal)) {
          let expression = tally.formula;
          if (endsWithOperator.test(expression)) expression = expression.slice(0, -1);
          expression = expression.replace(/x/g, "*").replace(/-/g, "-");
          expression = expression.lastIndexOf('(') > expression.lastIndexOf(')') ?
            expression + ')' : expression;
          let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
          setTally({...tally,
            currentVal: answer.toString(),
            formula: expression.replace(/\*/g, '⋅').replace(/-/g, '-') + '=' + answer,
            prevVal: answer,
            currentSign: answer[0] == '-' ? 'neg' : 'pos',
            lastClicked: 'evaluated'
          });
        }
    }

    const allClear = () => {
        setTally(initialState);
    }
    return(
    <>
        <Formula formula={tally.formula} />
        <Screen currentVal={tally.currentVal} />
        <Buttons handleNumbers={handleNumbers} handleOperators={handleOperators} allClear={allClear} handleEvaluate={handleEvaluate} 
        handleDecimal={handleDecimal} />
    </>
    );
}
export default Calculator;