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
class SnowyWinter {
public:
    int snowyHighwayLength(vector <int> startPoints, vector <int> endPoints) {
        int res;
        return res;
    }

};
// BEGIN CUT HERE
void main( int argc, char* argv[] ) {
    {
        int startPointsARRAY[] = {17,85,57};
        vector <int> startPoints( startPointsARRAY, startPointsARRAY+ARRSIZE(startPointsARRAY) );
        int endPointsARRAY[] = {33,86,84};
        vector <int> endPoints( endPointsARRAY, endPointsARRAY+ARRSIZE(endPointsARRAY) );
        SnowyWinter theObject;
        eq(0, theObject.snowyHighwayLength(startPoints, endPoints),44);
    }
    {
        int startPointsARRAY[] = {45,100,125,10,15,35,30,9};
        vector <int> startPoints( startPointsARRAY, startPointsARRAY+ARRSIZE(startPointsARRAY) );
        int endPointsARRAY[] = {46,200,175,20,25,45,40,10};
        vector <int> endPoints( endPointsARRAY, endPointsARRAY+ARRSIZE(endPointsARRAY) );
        SnowyWinter theObject;
        eq(1, theObject.snowyHighwayLength(startPoints, endPoints),132);
    }
    {
        int startPointsARRAY[] = {4387,711,2510,1001,4687,3400,5254,584,284,1423,3755,929,2154,5719,1326,2368,554};
        vector <int> startPoints( startPointsARRAY, startPointsARRAY+ARRSIZE(startPointsARRAY) );
        int endPointsARRAY[] = {7890,5075,2600,6867,7860,9789,6422,5002,4180,7086,8615,9832,4169,7188,9975,8690,1423};
        vector <int> endPoints( endPointsARRAY, endPointsARRAY+ARRSIZE(endPointsARRAY) );
        SnowyWinter theObject;
        eq(2, theObject.snowyHighwayLength(startPoints, endPoints),9691);
    }
    {
        int startPointsARRAY[] = {4906,5601,5087,1020,4362,2657,6257,5509,5107,5315,277,6801,2136,2921,5233,5082,497,8250,3956,5720};
        vector <int> startPoints( startPointsARRAY, startPointsARRAY+ARRSIZE(startPointsARRAY) );
        int endPointsARRAY[] = {4930,9130,9366,2322,4687,4848,8856,6302,5496,5438,829,9053,4233,4119,9781,8034,3956,9939,4908,5928};
        vector <int> endPoints( endPointsARRAY, endPointsARRAY+ARRSIZE(endPointsARRAY) );
        SnowyWinter theObject;
        eq(3, theObject.snowyHighwayLength(startPoints, endPoints),9510);
    }
    {
        int startPointsARRAY[] = {51,807,943,4313,8319,3644,481,220,2161,448,465,1657,6290,22,6152,647,3185,4474,2168};
        vector <int> startPoints( startPointsARRAY, startPointsARRAY+ARRSIZE(startPointsARRAY) );
        int endPointsARRAY[] = {1182,912,1832,7754,9557,7980,4144,3194,7129,5535,1172,2043,6437,7252,9508,4745,8313,8020,4017};
        vector <int> endPoints( endPointsARRAY, endPointsARRAY+ARRSIZE(endPointsARRAY) );
        SnowyWinter theObject;
        eq(4, theObject.snowyHighwayLength(startPoints, endPoints),9535);
    }
    {
        int startPointsARRAY[] = {8786,7391,201,4414,5822,5872,157,1832,7487,7518,2267,1763,3984,3102,7627,4099,524,1543,1022,3060};
        vector <int> startPoints( startPointsARRAY, startPointsARRAY+ARRSIZE(startPointsARRAY) );
        int endPointsARRAY[] = {9905,7957,3625,6475,9314,9332,4370,8068,8295,8177,7772,2668,7191,8480,9211,4802,2625,1924,9970,4180};
        vector <int> endPoints( endPointsARRAY, endPointsARRAY+ARRSIZE(endPointsARRAY) );
        SnowyWinter theObject;
        eq(5, theObject.snowyHighwayLength(startPoints, endPoints),9813);
    }
}
// END CUT HERE
