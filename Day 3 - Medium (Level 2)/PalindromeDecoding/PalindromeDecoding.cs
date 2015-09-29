// BEGIN CUT HERE

// END CUT HERE
using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;

public class PalindromeDecoding {
    public string decode(string code, int[] position, int[] length) {
        string res;
        return res;
    }

// BEGIN CUT HERE
    public static void Main(String[] args) {
        try  {
            eq(0,(new PalindromeDecoding()).decode("ab", new int[] {0}, new int[] {2}),"abba");
            eq(1,(new PalindromeDecoding()).decode("Misip", new int[] {2,3,1,7}, new int[] {1,1,2,2}),"Mississippi");
            eq(2,(new PalindromeDecoding()).decode("XY", new int[] {0, 0, 0, 0}, new int[] {2, 4, 8, 16}),"XYYXXYYXXYYXXYYXXYYXXYYXXYYXXYYX");
            eq(3,(new PalindromeDecoding()).decode("TC206", new int[] {1,2,5}, new int[] {1,1,1}),"TCCC2006");
            eq(4,(new PalindromeDecoding()).decode("nodecoding", new int[] {}, new int[] {}),"nodecoding");
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
