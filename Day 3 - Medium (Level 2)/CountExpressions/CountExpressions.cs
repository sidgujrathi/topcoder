// BEGIN CUT HERE

// END CUT HERE
using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;

public class CountExpressions {
    public int calcExpressions(int x, int y, int val) {
        int res;
        return res;
    }

// BEGIN CUT HERE
    public static void Main(String[] args) {
        try  {
            eq(0,(new CountExpressions()).calcExpressions(7, 8, 16),9);
            eq(1,(new CountExpressions()).calcExpressions(3, 5, 7),5);
            eq(2,(new CountExpressions()).calcExpressions(99, 100, 98010000),6);
            eq(3,(new CountExpressions()).calcExpressions(-99, 42, -1764),2);
            eq(4,(new CountExpressions()).calcExpressions(100, -100, -100000000),0);
            eq(5,(new CountExpressions()).calcExpressions(1, 2, 5),17);
        } 
        catch( Exception exx)  {
            System.Console.WriteLine(exx);
            System.Console.WriteLine( exx.StackTrace);
        }
    }
    private static void eq( int n, object have, object need) {
        if( eq( have, need ) ) {
            Console.WriteLine( "Case "+n+" passed." );
        } else {
            Console.Write( "Case "+n+" failed: expected " );
            print( need );
            Console.Write( ", received " );
            print( have );
            Console.WriteLine();
        }
    }
    private static void eq( int n, Array have, Array need) {
        if( have == null || have.Length != need.Length ) {
            Console.WriteLine("Case "+n+" failed: returned "+have.Length+" elements; expected "+need.Length+" elements.");
            print( have );
            print( need );
            return;
        }
        for( int i= 0; i < have.Length; i++ ) {
            if( ! eq( have.GetValue(i), need.GetValue(i) ) ) {
                Console.WriteLine( "Case "+n+" failed. Expected and returned array differ in position "+i );
                print( have );
                print( need );
                return;
            }
        }
        Console.WriteLine("Case "+n+" passed.");
    }
    private static bool eq( object a, object b ) {
        if ( a is double && b is double ) {
            return Math.Abs((double)a-(double)b) < 1E-9;
        } else {
            return a!=null && b!=null && a.Equals(b);
        }
    }
    private static void print( object a ) {
        if ( a is string ) {
            Console.Write("\"{0}\"", a);
        } else if ( a is long ) {
            Console.Write("{0}L", a);
        } else {
            Console.Write(a);
        }
    }
    private static void print( Array a ) {
        if ( a == null) {
            Console.WriteLine("<NULL>");
        }
        Console.Write('{');
        for ( int i= 0; i < a.Length; i++ ) {
            print( a.GetValue(i) );
            if( i != a.Length-1 ) {
                Console.Write(", ");
            }
        }
        Console.WriteLine( '}' );
    }
// END CUT HERE
}
