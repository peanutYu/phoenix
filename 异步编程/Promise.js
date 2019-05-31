const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

const isFunction = x => typeof x === 'function'

class MyPromise {
  constructor(fn) {
    this._status = PENDING;
    this._value = null;
    // this.deffered = [];
    this._onFulFilledQueues = [];
    this._onRejectedQueues = [];
    fn(this._resolve.bind(this), this._reject.bind(this));
  }

  _resolve(data) {
    if (this._status !== PENDING) {
      return false;
    }
    setTimeout(() => {
      this._status = FULFILLED;
      this._value = data;
      this._onFulFilledQueues.forEach(item => item(data));
    }, 0)
  }

  _reject(err) {
    if (this._status !== PENDING) {
      return false;
    }
    setTimeout(() => {
      this._status = REJECTED;
      this._value = err;
      this._onRejectedQueues.forEach(item => item(err));
    }, 0)
  }

  then(onFulfillment, onRejection) {
    const { _value, _status } = this;
    return new MyPromise((onFulfillmentNext, onRejectionNext) => {
      const fulfilled = value => {
        try {
          if (isFunction(onFulfillment)) {
            const response = onFulfillment(value);
            if (response instanceof MyPromise) {
              response.then(onFulfillmentNext, onRejectionNext);
            } else {
              onFulfillmentNext(response);
            }
          } else {
            onFulfillmentNext(value);
          }
        } catch (err) {
          onRejectionNext(err);
        }
      }

      const rejected = error => {
        try {
          if (isFunction(onRejection)) {
            const response = onRejection(error);
            if (response instanceof MyPromise) {
              response.then(onFulfillmentNext, onRejectionNext);
            } else {
              onFulfillmentNext(response);
            }
          } else {
            onRejectionNext(error);
          }
        } catch (err) {
          onRejectionNext(err);
        }
      }

      switch (_status) {
        case PENDING: 
          this._onFulFilledQueues.push(fulfilled);
          this._onRejectedQueues.push(rejected);
          break;
        case FULFILLED:
          fulfilled(_value);
          break;
        case REJECTED:
          rejected(_value);
          break;
      }
    });
  }

  catch(onRejection) {
    this.then(null, onRejection);
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      if (value instanceof MyPromise) {
        value.then(data => resolve(data));
      } else {
        resolve(value);
      }
    });
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(data => reject(data));
      } else {
        reject(value);
      }
    });
  }

  static all(arr) {
    return new MyPromise((resolve, reject) => {
      let values = [];
      let count = 0;
      for (let i = 0, len = arr.length; i < len; i++) {
        this.resolve(arr[i]).then(res => {
          values[i] = res;
          count++;
          if (count === arr.length) {
            resolve(values);
          }
        }, err => {
          reject(err);
        });
      }
    });
  }

  static race(arr) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0, len = arr.length; i < len; i++) {
        this.resolve(arr[i]).then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
      }
    });
  }
}

const myPromise1 = new MyPromise((resolve, reject) => {
  resolve('my Promise1');
});

const myPromise2 = new MyPromise((resolve, reject) => {
  resolve('my Promise2');
});

// myPromise1.then(data => console.log(data));
// myPromise2.then(data => console.log(data));

MyPromise.all([myPromise1, myPromise2]).then(data => console.log(data));

MyPromise.resolve(myPromise1).then(data => console.log(data));

MyPromise.reject(myPromise2).catch(data => console.log(data));