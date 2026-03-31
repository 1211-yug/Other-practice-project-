#include<iostream>

using namespace std;

int main(){

    int num;
    int count = 0;

    cout << "Enter a positive Number :- ";
    cin >> num;

    cout << endl;

    cout << "Factor numbers " << num << "are :- ";
    for(int i = 1; i <= num; i++) {
        if(num % i == 0){
            cout << i << " ";
            count++;
        }
    }

    cout << endl;

    cout << "Total Number of Factors :- " << count << endl;

    if(count == 2){
        cout << "The number is PRIME" << endl << endl;
    }else{
        cout << "The number is NOT PRIME" << endl << endl;
    }

    return 0;
}