// Author: Joshua Cancellier
// Date: November 7, 2018
// Purpose: Filter out duplicate entries for maker.sql file
#include<iostream>
#include<string>
#include<fstream>
#include<vector>
#include<map>

#define INPUT_FILE "maker.sql"
#define OUTPUT_FILE "maker-new.sql"

using namespace std;


void findAll(ifstream &, vector<string>&);
void extractMakerModel(string, string &);
void findDuplicates(const vector<string>, map<string, vector<int> > &);

template<class T>
void displayAll(vector<T>);

void displayAll(map<string, vector<int> >);
void createNewSQLFile(vector<int> toRemove);

int main() {
    ifstream fin(INPUT_FILE);
    vector<string> makersAndModels;

    //hashmap containing makes and their duplicates
    map<string, vector<int> >duplicates;

    
    findAll(fin, makersAndModels);
    displayAll(makersAndModels);
    findDuplicates(makersAndModels ,duplicates);
    displayAll(duplicates);

    // at this point duplicates contains all lines needing to be removed
    vector<int> toRemove;
    for (auto& kv : duplicates) {
        for(int i = 0; i < kv.second.size(); i++) {
            toRemove.push_back(kv.second[i]);
        }
    }
    sort(toRemove.begin(), toRemove.end());
    displayAll(toRemove);
    cout << toRemove.size() << endl;

    createNewSQLFile(toRemove);

    return 0;
}

void createNewSQLFile(vector<int> omit) {
    int currentIndex = 0;
    ifstream fin(INPUT_FILE);
    ofstream fout(OUTPUT_FILE);

    string line;
    while(getline(fin, line)) {
        if(binary_search(omit.begin(), omit.end(), currentIndex)) {
            currentIndex++;
            continue;
        }
        fout << line << endl;
        currentIndex++;
    }
}

template <typename Type>
void remove_duplicate(std::vector<Type> &vec) {
  std::sort(vec.begin(), vec.end());
  vec.erase(unique(vec.begin(), vec.end()), vec.end());
}

void displayAll(map<string, vector<int> > duplicates) {
    for (auto& kv : duplicates) {
        std::cout << kv.first << endl;
        for(int i = 0; i < kv.second.size(); i++) {
            cout << kv.second[i] << " ";
        }
        cout << endl;
    }
}

void findDuplicates(const vector<string> makersAndModels, map<string, vector<int> > &duplicates) {
    for(int i = 0; i < makersAndModels.size(); i++) {
        for(int j = 0; j < makersAndModels.size(); j++) {
            if(i == j)
                continue;

            if(makersAndModels[i].compare(makersAndModels[j]) == 0) {
                duplicates[makersAndModels[i]].push_back(j);
            }
        }
    }

    //remove duplicate entries in inner vector<int>
    for (auto& kv : duplicates) {
        remove_duplicate(kv.second);
        kv.second.pop_back();
        // cout << endl;
    }
    // sort(duplicates.begin(), duplicates.end());
}

void findAll(ifstream &fin, vector<string> &makersAndModels) {
    string input;
    string makerAndModel;
    while(getline(fin, input)) {
        extractMakerModel(input, makerAndModel);
        // cout << makerAndModel << endl;
        makersAndModels.push_back(makerAndModel);
    }
}

template<class T>
void displayAll(vector<T> arr) {
    for(int i = 0; i < arr.size(); i++) {
        cout << arr[i] << endl;
    }
}

// @param line : line of input to parse
// @param makerAndModel : 2-element string-array which will hold maker and model respectively
void extractMakerModel(string line, string &makerAndModel) {
    // vector storing indices of quotes (total of 4 expected)
    vector<int> singleQuoteIndices;
    for(int i = 0; i < line.size(); i++) {
        if(line[i] == '\'')
            singleQuoteIndices.push_back(i);
    }

    makerAndModel = line.substr(singleQuoteIndices[0]+1, singleQuoteIndices[1]-singleQuoteIndices[0]-1) 
                    + " " 
                    + line.substr(singleQuoteIndices[2]+1, singleQuoteIndices[3]-singleQuoteIndices[2]-1);
}
