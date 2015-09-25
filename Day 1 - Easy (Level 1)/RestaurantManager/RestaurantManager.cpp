// BEGIN CUT HERE

// END CUT HERE
#include <algorithm>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <queue>
#include <set>
#include <map>
#include <cstdio>
#include <cstdlib>
#include <cctype>
#include <cmath>
using namespace std;

vector<string> split( const string& s, const string& delim =" " ) {
    vector<string> res;
    string t;
    for ( int i = 0 ; i != s.size() ; i++ ) {
        if ( delim.find( s[i] ) != string::npos ) {
            if ( !t.empty() ) {
                res.push_back( t );
                t = "";
            }
        } else {
            t += s[i];
        }
    }
    if ( !t.empty() ) {
        res.push_back(t);
    }
    return res;
}

vector<int> splitInt( const string& s, const string& delim =" " ) {
    vector<string> tok = split( s, delim );
    vector<int> res;
    for ( int i = 0 ; i != tok.size(); i++ )
        res.push_back( atoi( tok[i].c_str() ) );
    return res;
}

// BEGIN CUT HERE
#define ARRSIZE(x) (sizeof(x)/sizeof(x[0]))

template<typename T> void print( T a ) {
    cerr << a;
}
static void print( long long a ) {
    cerr << a << "L";
}
static void print( string a ) {
    cerr << '"' << a << '"';
}
template<typename T> void print( vector<T> a ) {
    cerr << "{";
    for ( int i = 0 ; i != a.size() ; i++ ) {
        if ( i != 0 ) cerr << ", ";
        print( a[i] );
    }
    cerr << "}" << endl;
}
template<typename T> void eq( int n, T have, T need ) {
    if ( have == need ) {
        cerr << "Case " << n << " passed." << endl;
    } else {
        cerr << "Case " << n << " failed: expected ";
        print( need );
        cerr << " received ";
        print( have );
        cerr << "." << endl;
    }
}
template<typename T> void eq( int n, vector<T> have, vector<T> need ) {
    if( have.size() != need.size() ) {
        cerr << "Case " << n << " failed: returned " << have.size() << " elements; expected " << need.size() << " elements.";
        print( have );
        print( need );
        return;
    }
    for( int i= 0; i < have.size(); i++ ) {
        if( have[i] != need[i] ) {
            cerr << "Case " << n << " failed. Expected and returned array differ in position " << i << ".";
            print( have );
            print( need );
            return;
        }
    }
    cerr << "Case " << n << " passed." << endl;
}
static void eq( int n, string have, string need ) {
    if ( have == need ) {
        cerr << "Case " << n << " passed." << endl;
    } else {
        cerr << "Case " << n << " failed: expected ";
        print( need );
        cerr << " received ";
        print( have );
        cerr << "." << endl;
    }
}
// END CUT HERE
class RestaurantManager {
public:
    int allocateTables(vector <int> tables, vector <int> groupSizes, vector <int> arrivals, vector <int> departures) {
        int res;
        return res;
    }

};
// BEGIN CUT HERE
void main( int argc, char* argv[] ) {
    {
        int tablesARRAY[] = {4};
        vector <int> tables( tablesARRAY, tablesARRAY+ARRSIZE(tablesARRAY) );
        int groupSizesARRAY[] = {4,8,4,2,2,4};
        vector <int> groupSizes( groupSizesARRAY, groupSizesARRAY+ARRSIZE(groupSizesARRAY) );
        int arrivalsARRAY[] = {0,10,12,16,18,26};
        vector <int> arrivals( arrivalsARRAY, arrivalsARRAY+ARRSIZE(arrivalsARRAY) );
        int departuresARRAY[] = {10,20,18,26,36,28};
        vector <int> departures( departuresARRAY, departuresARRAY+ARRSIZE(departuresARRAY) );
        RestaurantManager theObject;
        eq(0, theObject.allocateTables(tables, groupSizes, arrivals, departures),14);
    }
    {
        int tablesARRAY[] = {4,4};
        vector <int> tables( tablesARRAY, tablesARRAY+ARRSIZE(tablesARRAY) );
        int groupSizesARRAY[] = {4,8,4,2,2,4};
        vector <int> groupSizes( groupSizesARRAY, groupSizesARRAY+ARRSIZE(groupSizesARRAY) );
        int arrivalsARRAY[] = {0,10,12,16,18,26};
        vector <int> arrivals( arrivalsARRAY, arrivalsARRAY+ARRSIZE(arrivalsARRAY) );
        int departuresARRAY[] = {10,20,18,26,36,28};
        vector <int> departures( departuresARRAY, departuresARRAY+ARRSIZE(departuresARRAY) );
        RestaurantManager theObject;
        eq(1, theObject.allocateTables(tables, groupSizes, arrivals, departures),8);
    }
    {
        int tablesARRAY[] = {4,8};
        vector <int> tables( tablesARRAY, tablesARRAY+ARRSIZE(tablesARRAY) );
        int groupSizesARRAY[] = {4,8,4,2,2,4};
        vector <int> groupSizes( groupSizesARRAY, groupSizesARRAY+ARRSIZE(groupSizesARRAY) );
        int arrivalsARRAY[] = {0,10,12,16,18,26};
        vector <int> arrivals( arrivalsARRAY, arrivalsARRAY+ARRSIZE(arrivalsARRAY) );
        int departuresARRAY[] = {10,20,18,26,36,28};
        vector <int> departures( departuresARRAY, departuresARRAY+ARRSIZE(departuresARRAY) );
        RestaurantManager theObject;
        eq(2, theObject.allocateTables(tables, groupSizes, arrivals, departures),2);
    }
    {
        int tablesARRAY[] = {10,8,11,16};
        vector <int> tables( tablesARRAY, tablesARRAY+ARRSIZE(tablesARRAY) );
        int groupSizesARRAY[] = {14,1,15,1,19,15,9,15,20,2};
        vector <int> groupSizes( groupSizesARRAY, groupSizesARRAY+ARRSIZE(groupSizesARRAY) );
        int arrivalsARRAY[] = {4,5,7,18,21,25,29,31,46,49};
        vector <int> arrivals( arrivalsARRAY, arrivalsARRAY+ARRSIZE(arrivalsARRAY) );
        int departuresARRAY[] = {8,37,11,36,36,46,40,42,47,50};
        vector <int> departures( departuresARRAY, departuresARRAY+ARRSIZE(departuresARRAY) );
        RestaurantManager theObject;
        eq(3, theObject.allocateTables(tables, groupSizes, arrivals, departures),69);
    }
    {
        int tablesARRAY[] = {18,15,2,6};
        vector <int> tables( tablesARRAY, tablesARRAY+ARRSIZE(tablesARRAY) );
        int groupSizesARRAY[] = {7,9,16,3,10,3,2,10,16,16};
        vector <int> groupSizes( groupSizesARRAY, groupSizesARRAY+ARRSIZE(groupSizesARRAY) );
        int arrivalsARRAY[] = {10,15,19,20,21,22,27,35,37,43};
        vector <int> arrivals( arrivalsARRAY, arrivalsARRAY+ARRSIZE(arrivalsARRAY) );
        int departuresARRAY[] = {13,24,22,32,32,32,35,48,41,44};
        vector <int> departures( departuresARRAY, departuresARRAY+ARRSIZE(departuresARRAY) );
        RestaurantManager theObject;
        eq(4, theObject.allocateTables(tables, groupSizes, arrivals, departures),10);
    }
    {
        int tablesARRAY[] = {13,9,6,1,9,8,6,2,8,20};
        vector <int> tables( tablesARRAY, tablesARRAY+ARRSIZE(tablesARRAY) );
        int groupSizesARRAY[] = {20,10,11,10,1,5,16,2,9,17};
        vector <int> groupSizes( groupSizesARRAY, groupSizesARRAY+ARRSIZE(groupSizesARRAY) );
        int arrivalsARRAY[] = {12,14,64,78,100,121,151,155,162,164};
        vector <int> arrivals( arrivalsARRAY, arrivalsARRAY+ARRSIZE(arrivalsARRAY) );
        int departuresARRAY[] = {19,26,159,96,155,134,169,199,169,174};
        vector <int> departures( departuresARRAY, departuresARRAY+ARRSIZE(departuresARRAY) );
        RestaurantManager theObject;
        eq(5, theObject.allocateTables(tables, groupSizes, arrivals, departures),17);
    }
}
// END CUT HERE
