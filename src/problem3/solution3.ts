function sum_to_n_c(n: number): number {
    if(n<1){
        throw new Error("you must input a positive number")
    }

    if(n==1){
        return 1;
    }
    
    return n+sum_to_n_c(n-1);


}
//inefficient for large inputs due to stack depth and repeated calculations.