#include<iostream>

using namespace std;

int findFrequency(int arr[], int size, int key){
    int count = 0;

    for(int i=0 ; i<size ; i++){
        if(arr[i] == key){
            count++;
        }
    }
    return count;
}

int main(){

    int num,key,result;

    cout << "Enter size of array :- ";
    cin >> num;

    int arr[num];

    cout << "Enter elements :- " << endl;
    for(int i=0 ; i<num ; i++){
        cout << "a[" << i << "] = ";
        cin >> arr[i];
    }

    cout << "Enter number to find frequency :- ";
    cin >> key;

    result = findFrequency(arr,num,key);

    cout << "Frequency of " << key << " is :- " << result << endl;

    return 0;
}