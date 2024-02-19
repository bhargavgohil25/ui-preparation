function myIsEqual(a, b, map = new Map()) {
    console.log(a, b);
    if(a === b) return true;

    if(map.has(a) && (map.get(a) === b)) return  true;

    map.set(a, b);

    if(typeof a === 'object' && typeof b === 'object') {
        const a_keys = Object.keys(a);
        const b_keys = Object.keys(b);

        if(a_keys.length !== b_keys.length) return false;

        for(let i = 0; i < a_keys.length; i++) {
            if(myIsEqual(a[a_keys[i]], b[b_keys[i]], map) === false) return false;
        }
        return true;
    }
    return false;
}

const a = {
    id: '123',
    name: 'bhargav',
    college: {
        rollNumber: 2019045,
        collegeName: "IIITDMJ",
    }
}

const b = {
    id: '123',
    name: 'bhargav',
    college: {
        rollNumber: 2019045,
        collegeName: "IIITDM"
    }
}

console.log(myIsEqual(a,b));
