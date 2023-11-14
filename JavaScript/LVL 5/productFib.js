function productFib(prod, fib1=0, fib2=1) {
    if ((fib1 * fib2) >= prod) {
          if ((fib1 * fib2) === prod) {
              return [fib1, fib2, true]
          }
          return [fib1, fib2, false]
      }
      let result = productFib(prod, fib2, (fib1 + fib2))
      return result
  }