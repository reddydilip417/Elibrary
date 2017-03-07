#include <iostream>
using namespace std;
int main(){
	int n,m,min,temp;
	int a[20],b[20],z[20];
	int count1=0,count2=0,count3=0;
	cin>>n;
	for(int i=0;i<;++i)
		cin>>a[i];
	cin>>m;
	for(int j=0;j<m;++j)
		cin>>b[j];
	for(int i=0;i<n;++i){
		for(int j=i+1;j<n;++j){
			if(a[i]==a[j]){
				++count1;
			}
		}
	

		for(int l=i+1;l<m;++l){
			if(b[i]==b[l]){
				++count2;

			}
		}

		if(count1 !=count2){
			z[i]=a[i];
			++count3;
		}
}
	min=z[0];
	for(int i=1;i<count3;i++){
		if(z[i]<min){
			temp=min;
			min=z[i];
			z[i]=temp;
		}
	}
	for(int i=0;i<count3;++i)
		cout<<z[i]
	return 1;
}