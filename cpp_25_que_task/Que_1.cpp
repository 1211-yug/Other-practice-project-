#include<iostream>

using namespace std;

int main(){

    int amount;

    cout << "Enter amount Number :- ";
    cin >> amount;
    cout << endl;

    int notes[] = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
    int size = 10;
    int count;

    cout << "Minimum Notes Required :- " << endl << endl;

    for(int i=0 ; i<size ; i++){
            if(amount >= notes[i]){
                count = amount / notes[i];
                amount = amount % notes[i];
                cout << notes[i] << "x" << count << endl;  
            }
    }

    return 0;
}