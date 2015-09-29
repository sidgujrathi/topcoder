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
class SuperRot {
public:
    string decoder(string message) {
        string res;
        return res;
    }

};
// BEGIN CUT HERE
void main( int argc, char* argv[] ) {
    {
        SuperRot theObject;
        eq(0, theObject.decoder("Uryyb 28"),"Hello 73");
    }
    {
        SuperRot theObject;
        eq(1, theObject.decoder("GbcPbqre"),"TopCoder");
    }
    {
        SuperRot theObject;
        eq(2, theObject.decoder(""),"");
    }
    {
        SuperRot theObject;
        eq(3, theObject.decoder("5678901234"),"0123456789");
    }
    {
        SuperRot theObject;
        eq(4, theObject.decoder("NnOoPpQqRr AaBbCcDdEe"),"AaBbCcDdEe NnOoPpQqRr");
    }
    {
        SuperRot theObject;
        eq(5, theObject.decoder("Gvzr vf 54 71 CZ ba Whyl 4gu bs gur lrne 7558 NQ"),"Time is 09 26 PM on July 9th of the year 2003 AD");
    }
    {
        SuperRot theObject;
        eq(6, theObject.decoder("Gur dhvpx oebja sbk whzcf bire n ynml qbt"),"The quick brown fox jumps over a lazy dog");
    }
}
// END CUT HERE
