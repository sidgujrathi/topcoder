// BEGIN CUT HERE

// END CUT HERE
using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;

public class RestaurantManager {
    public int allocateTables(int[] tables, int[] groupSizes, int[] arrivals, int[] departures) {
        int res = 0;
        return res;
    }

// BEGIN CUT HERE
    public static void Main(String[] args) {
        try  {
            eq(0,(new RestaurantManager()).allocateTables(new int[] {4}, new int[] {4,8,4,2,2,4}, new int[] {0,10,12,16,18,26}, new int[] {10,20,18,26,36,28}),14);
            eq(1,(new RestaurantManager()).allocateTables(new int[] {4,4}, new int[] {4,8,4,2,2,4}, new int[] {0,10,12,16,18,26}, new int[] {10,20,18,26,36,28}),8);
            eq(2,(new RestaurantManager()).allocateTables(new int[] {4,8}, new int[] {4,8,4,2,2,4}, new int[] {0,10,12,16,18,26}, new int[] {10,20,18,26,36,28}),2);
            eq(3,(new RestaurantManager()).allocateTables(new int[] {10,8,11,16}, new int[] {14,1,15,1,19,15,9,15,20,2}, new int[] {4,5,7,18,21,25,29,31,46,49}, new int[] {8,37,11,36,36,46,40,42,47,50}),69);
            eq(4,(new RestaurantManager()).allocateTables(new int[] {18,15,2,6}, new int[] {7,9,16,3,10,3,2,10,16,16}, new int[] {10,15,19,20,21,22,27,35,37,43}, new int[] {13,24,22,32,32,32,35,48,41,44}),10);
            eq(5,(new RestaurantManager()).allocateTables(new int[] {13,9,6,1,9,8,6,2,8,20}, new int[] {20,10,11,10,1,5,16,2,9,17}, new int[] {12,14,64,78,100,121,151,155,162,164}, new int[] {19,26,159,96,155,134,169,199,169,174}),17);
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
