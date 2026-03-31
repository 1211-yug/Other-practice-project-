#include<iostream>

using namespace std;

int main(){

    for(int i=0 ; i<=6 ; i++){
        for(int j=0 ; j<=i ; j++){
            cout << "* ";
        }
        for(int k=5 ; k>=i ; k--){
            cout << "  ";
        }
        for(int k=i ; k<=5 ; k++){
        	cout << "  ";
		}
		for(int j=i ; j>=0 ; j--){
			cout << "* ";
		}
        cout << endl;
    }

    for(int i=0 ; i<=5 ; i++){
        for(int j=i ; j<=5 ; j++){
            cout << "* ";            
        }
        for(int k=0 ; k<=i ; k++){
        	cout << "  ";
		}
		for(int k=i ; k>=0 ; k--){
			cout << "  ";
		}
		for(int j=i ; j<=5 ; j++){
			cout << "* ";
		}
        cout << endl;
    }

    return 0;
}