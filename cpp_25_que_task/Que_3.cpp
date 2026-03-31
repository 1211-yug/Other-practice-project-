#include<iostream>
using namespace std;

int main(){

    int num;
    int evencount, evensum=0;
    int oddcount, oddsum=0;

    cout << "Enter 10 Integers :- " << endl; 

    for(int i=0 ; i<10 ; i++){
        cout << "Enter a Numbers " << i << " :- ";
        cin >> num;

        if(num % 2 == 0){
            evencount++;
            evensum = evensum + num;
        }else{
            oddcount++;
            oddsum = oddsum + num;
        }
    }

    cout << "=========================================" << endl;
    cout << "Count of Even numbers :- " << evencount << endl;
    cout << "Count of Odd numbers :- " << oddcount << endl;
    cout << "Sum of all Even numbers :- " << evensum << endl;
    cout << "Sum of all Odd numbers :- " << oddsum << endl;
    cout << "=========================================" << endl;

    return 0;
}