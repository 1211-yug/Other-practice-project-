#include<iostream>

using namespace std;

int findlargestdigit(int ln){

    int largest = 0;
    int digit;

    while(ln > 0){
        digit = ln % 10;
        ln = ln / 10;
        if(digit > largest){
            largest = digit;
        }
    }

    return largest;
    
}

int main(){

    int num;
    int largestdigit;

    cout << "Enter a positive Number :- ";
    cin >> num;

    largestdigit = findlargestdigit(num);

    cout << "Largest digit in the numbers is :- " << largestdigit << endl;

    if(num % 2 == 0){
        cout << "The number is Even." << endl << endl;
    }else{
        cout << "The number is Odd." << endl << endl;
    }

    return 0;
}