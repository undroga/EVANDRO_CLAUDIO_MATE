function sum_to_n_b(n: number): number {
    if(n<1){
        throw new Error("you must input a positive number")
    }
    return (n*(n+1))/2;
}

// fast and efficient with constant time complexity; this is the prefered method for calculating the sum.