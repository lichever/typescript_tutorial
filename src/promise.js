// function getUsers() {
//     return [
//       { username: 'john', email: 'john@test.com' },
//       { username: 'jane', email: 'jane@test.com' },
//       { username: 'john', email: 'aaa@test.com' },
//     ];
//   }

//mimic async
//   function getUsers() {
//     let users = [];

//     // delay 1 second (1000ms)
//     setTimeout(() => {
//       users = [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ];
//     }, 1000);

//     return users;
//   }

//   function findUser(username) {
//     const users = getUsers();
//     console.log(users);
//     const user = users.find((user) => user.username === username);
//     return user;
//   }

//   console.log(findUser('john'));

//1 use callback to solve async issue
// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ]);
//   }, 1000);
// }

// //相当于是把finduser这个function的 逻辑 传给getUsers这个function 作为callback参数,
// //在getUsers这个function里面, 会调用callback这个参数, 传给 setTimeout这个function
// //整个逻辑 都给了 setTimeout这个function
// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }

// findUser("john", console.log);

//2 use promise to solve async issue
// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: "john", email: "john@test.com" },
//         { username: "jane", email: "jane@test.com" },
//       ]);
//     }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }

// const promise = getUsers();
// promise.then(onFulfilled);

//2.1 use promise to solve async issue with error
let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsers();
// promise.then(onFulfilled, onRejected);


//2.2 add catch and finally
promise.then(onFulfilled).catch(onRejected).finally(() => {
  console.log("done");
});
