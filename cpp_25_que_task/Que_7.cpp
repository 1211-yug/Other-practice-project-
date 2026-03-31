#include<iostream>

using namespace std;

int countZero(int num){

    int count = 0, digit;

    while (num > 0){
        digit = num % 10;
        num = num / 10;
        if(digit == 0){
            count++;
        }
    }

    return count;
}

int main(){

    int number;
    int result;

    cout << "Enter a number :- ";
    cin >> number;

    result = countZero(number);

    cout << "Numbers of Zeros :- " << result << endl;

    return 0;
}