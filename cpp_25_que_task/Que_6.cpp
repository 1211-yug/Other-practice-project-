#include<iostream>

using namespace std;

int main(){

    float potatoes, tomatoes, onions, okra;
    float pRate = 20, tRate = 35, oRate = 25, okRate = 45;
    float pTotal, tTotal, oTotal, okTotal,finalTotal;

    cout << "Enter Quantity (int kg) :- " << endl;

    cout << "Potato (RS 20/kg) :- ";
    cin >> potatoes;
    
    cout << "Tomatoes (RS 35/kg) :- ";
    cin >> tomatoes;
    
    cout << "Onions (RS 25/kg) :- ";
    cin >> onions;
    
    cout << "Okra (RS 45/kg) :- ";
    cin >> okra;
    
    cout << endl;

    pTotal = potatoes * pRate;
    tTotal = tomatoes * tRate;
    oTotal = onions * oRate;
    okTotal = okra * okRate;

    finalTotal = pTotal + tTotal + oTotal + okTotal;

    cout << "-------- Bill --------" << endl;
    cout << "Potat  :- " << potatoes  << " kg x " << pRate << " = "  << pTotal << endl;
    cout << "Tomato :- " << tomatoes  << " kg x " << tRate << " = " << tTotal << endl;
    cout << "Onion  :- " << onions  << " kg x " << oRate << " = " << oTotal << endl;
    cout << "Okra   :- " << okra  << " kg x " << okRate << " = " << okTotal << endl;

    cout << "----------------------" << endl;
    cout << "Total Bill :- RS = " << finalTotal << endl; 

    return 0;
}