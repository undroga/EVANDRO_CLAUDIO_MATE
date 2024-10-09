function sum_to_n_a(n: number): number  {
    if(n<1){
        throw new Error("you must input a positive number")
    }

    let sum = 0;
    for(let i=1; i<=n; i++){

        sum+= i;
    }
    return sum;
}
//simple and intuitive, but slower for large n due to its linear time complexiity.