#include<iostream>

using namespace std;

int main(){

    int num,temp,digit;
    int count = 0, sum = 0, reverse = 0;

    cout << "Enter a Number :- ";
    cin >> num;
    cout << endl;

    temp = num;

    while (temp > 0){
        digit = temp % 10;
        count++;
        sum = sum + digit;
        reverse = reverse * 10 + digit;
        temp = temp / 10;   
    }
    
    cout << "Number of Digits :- " << count << endl;
    cout << "Sum of Digits :- " << sum << endl;
    cout << "Reverse Numbers :- " << reverse << endl;

    if(num == reverse)
        cout << "Palindrome Number" << endl;
    else
        cout << "Not a Palindrome Number" << endl;
    
    
    return 0;
}