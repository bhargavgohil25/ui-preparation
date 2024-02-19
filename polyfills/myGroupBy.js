function myGroupBy(collection, property) {
    let output = {};

    if(!collection || typeof collection !== 'object') {
        return output;
    }

    let isPropertyFunction = typeof property === 'function';
    let isPropertyPath = typeof property === 'string';


    for(const value of Object.values(collection)) {
        let computedValue = undefined;

        if(isPropertyFunction) {
            computedValue = property(value);
        } else if(isPropertyPath) {
            let currentKey = null;
            let currentItem = value;

            const path = property.split('.');

            for(let i = 0; i < path.length; i++) {
                currentKey = path[i];
                currentItem = currentItem[currentKey];
            }

            computedValue = currentItem;
        }

        output[computedValue] = output[computedValue] || [];
        output[computedValue].push(value);
    }
    return output;
}

console.log(myGroupBy([
    {
        a: {
            b: {
                c: 10
            }
        }
    },
    {
        a: {
            b: {
                c: 12
            }
        }
    }
] ,'a.b.c'));