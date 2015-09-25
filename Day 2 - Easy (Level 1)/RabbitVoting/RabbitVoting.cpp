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
class RabbitVoting {
public:
    string getWinner(vector <string> names, vector <string> votes) {
        string res;
        return res;
    }

};
// BEGIN CUT HERE
void main( int argc, char* argv[] ) {
    {
        string namesARRAY[] = { "Alice", "Bill", "Carol", "Dick" };
        vector <string> names( namesARRAY, namesARRAY+ARRSIZE(namesARRAY) );
        string votesARRAY[] = { "Bill", "Dick", "Alice", "Alice" };
        vector <string> votes( votesARRAY, votesARRAY+ARRSIZE(votesARRAY) );
        RabbitVoting theObject;
        eq(0, theObject.getWinner(names, votes),"Alice");
    }
    {
        string namesARRAY[] = { "Alice", "Bill", "Carol", "Dick" };
        vector <string> names( namesARRAY, namesARRAY+ARRSIZE(namesARRAY) );
        string votesARRAY[] = { "Carol", "Carol", "Bill", "Bill" };
        vector <string> votes( votesARRAY, votesARRAY+ARRSIZE(votesARRAY) );
        RabbitVoting theObject;
        eq(1, theObject.getWinner(names, votes),"");
    }
    {
        string namesARRAY[] = { "Alice", "Bill", "Carol", "Dick" };
        vector <string> names( namesARRAY, namesARRAY+ARRSIZE(namesARRAY) );
        string votesARRAY[] = { "Alice", "Alice", "Bill", "Bill" };
        vector <string> votes( votesARRAY, votesARRAY+ARRSIZE(votesARRAY) );
        RabbitVoting theObject;
        eq(2, theObject.getWinner(names, votes),"Bill");
    }
    {
        string namesARRAY[] = { "Alice", "Bill" };
        vector <string> names( namesARRAY, namesARRAY+ARRSIZE(namesARRAY) );
        string votesARRAY[] = { "Alice", "Bill" };
        vector <string> votes( votesARRAY, votesARRAY+ARRSIZE(votesARRAY) );
        RabbitVoting theObject;
        eq(3, theObject.getWinner(names, votes),"");
    }
    {
        string namesARRAY[] = { "WhiteRabbit", "whiterabbit", "whiteRabbit", "Whiterabbit" };
        vector <string> names( namesARRAY, namesARRAY+ARRSIZE(namesARRAY) );
        string votesARRAY[] = { "whiteRabbit", "whiteRabbit", "whiteRabbit", "WhiteRabbit" };
        vector <string> votes( votesARRAY, votesARRAY+ARRSIZE(votesARRAY) );
        RabbitVoting theObject;
        eq(4, theObject.getWinner(names, votes),"whiteRabbit");
    }
}
// END CUT HERE
