import validator from 'validator';

export function validate(rule, args){
    switch(rule){
        case 'required':
            return required.apply(this, args);
    }
    
    return !validator[rule].apply(validator, args);
}

export function required(value){
    return !value;
}