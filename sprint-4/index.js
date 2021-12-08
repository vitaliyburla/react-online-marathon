//Task 1
function getPromise(delay, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

//Task 2
function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            resolve(x + y);
        } else {
            reject('Error!');
        }
    });
}

//Task 3
const { getUser, getUserProfile } = require('./Helper.js');

async function getAge() {
    const user = await getUser();
    const userProfile = await getUserProfile(user.id);
    const age = userProfile.age;
    return age;
}

//Task 4
function* take(n, iterable) {
    for (let i = 0; i < n; i++) {
        yield iterable[i];
    }
}
