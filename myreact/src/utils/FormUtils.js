import {validate} from './Validators';

export function getId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function getRules(input, props){
        let rules = [];
        const {required, isEmail} = props;
        if(required) rules.push({rule: 'required', args: [input.value], msg: 'required'});
        if(isEmail) rules.push({rule: 'isEmail', args: [input.value], msg: 'is not email'});
        
        return rules;
}

export function getErrors(rules){
    const errors = rules.filter((r) => {
        return validate(r.rule, r.args);
    });
    
    return errors;
}