// BEGIN CUT HERE

// END CUT HERE
import java.util.*;
public class RestaurantManager {
    public int allocateTables(int[] tables, int[] groupSizes, int[] arrivals, int[] departures) {
        int res = 0;
        return res;
    }

// BEGIN CUT HERE
    public static void main(String[] args) {
        try {
            eq(0,(new RestaurantManager()).allocateTables(new int[] {4}, new int[] {4,8,4,2,2,4}, new int[] {0,10,12,16,18,26}, new int[] {10,20,18,26,36,28}),14);
            eq(1,(new RestaurantManager()).allocateTables(new int[] {4,4}, new int[] {4,8,4,2,2,4}, new int[] {0,10,12,16,18,26}, new int[] {10,20,18,26,36,28}),8);
            eq(2,(new RestaurantManager()).allocateTables(new int[] {4,8}, new int[] {4,8,4,2,2,4}, new int[] {0,10,12,16,18,26}, new int[] {10,20,18,26,36,28}),2);
            eq(3,(new RestaurantManager()).allocateTables(new int[] {10,8,11,16}, new int[] {14,1,15,1,19,15,9,15,20,2}, new int[] {4,5,7,18,21,25,29,31,46,49}, new int[] {8,37,11,36,36,46,40,42,47,50}),69);
            eq(4,(new RestaurantManager()).allocateTables(new int[] {18,15,2,6}, new int[] {7,9,16,3,10,3,2,10,16,16}, new int[] {10,15,19,20,21,22,27,35,37,43}, new int[] {13,24,22,32,32,32,35,48,41,44}),10);
            eq(5,(new RestaurantManager()).allocateTables(new int[] {13,9,6,1,9,8,6,2,8,20}, new int[] {20,10,11,10,1,5,16,2,9,17}, new int[] {12,14,64,78,100,121,151,155,162,164}, new int[] {19,26,159,96,155,134,169,199,169,174}),17);
        } catch( Exception exx) {
            System.err.println(exx);
            exx.printStackTrace(System.err);
        }
    }
    private static void eq( int n, int a, int b ) {
        if ( a==b )
            System.err.println("Case "+n+" passed.");
        else
            System.err.println("Case "+n+" failed: expected "+b+", received "+a+".");
    }
    private static void eq( int n, char a, char b ) {
        if ( a==b )
            System.err.println("Case "+n+" passed.");
        else
            System.err.println("Case "+n+" failed: expected '"+b+"', received '"+a+"'.");
    }
    private static void eq( int n, long a, long b ) {
        if ( a==b )
            System.err.println("Case "+n+" passed.");
        else
            System.err.println("Case "+n+" failed: expected \""+b+"L, received "+a+"L.");
    }
    private static void eq( int n, boolean a, boolean b ) {
        if ( a==b )
            System.err.println("Case "+n+" passed.");
        else
            System.err.println("Case "+n+" failed: expected "+b+", received "+a+".");
    }
    private static void eq( int n, String a, String b ) {
        if ( a != null && a.equals(b) )
            System.err.println("Case "+n+" passed.");
        else
            System.err.println("Case "+n+" failed: expected \""+b+"\", received \""+a+"\".");
    }
    private static void eq( int n, int[] a, int[] b ) {
        if ( a.length != b.length ) {
            System.err.println("Case "+n+" failed: returned "+a.length+" elements; expected "+b.length+" elements.");
            return;
        }
        for ( int i= 0; i < a.length; i++)
            if ( a[i] != b[i] ) {
                System.err.println("Case "+n+" failed. Expected and returned array differ in position "+i);
                print( b );
                print( a );
                return;
            }
        System.err.println("Case "+n+" passed.");
    }
    private static void eq( int n, long[] a, long[] b ) {
        if ( a.length != b.length ) {
            System.err.println("Case "+n+" failed: returned "+a.length+" elements; expected "+b.length+" elements.");
            return;
        }
        for ( int i= 0; i < a.length; i++ )
            if ( a[i] != b[i] ) {
                System.err.println("Case "+n+" failed. Expected and returned array differ in position "+i);
                print( b );
                print( a );
                return;
            }
        System.err.println("Case "+n+" passed.");
    }
    private static void eq( int n, String[] a, String[] b ) {
        if ( a.length != b.length) {
            System.err.println("Case "+n+" failed: returned "+a.length+" elements; expected "+b.length+" elements.");
            return;
        }
        for ( int i= 0; i < a.length; i++ )
            if( !a[i].equals( b[i])) {
                System.err.println("Case "+n+" failed. Expected and returned array differ in position "+i);
                print( b );
                print( a );
                return;
            }
        System.err.println("Case "+n+" passed.");
    }
    private static void print( int a ) {
        System.err.print(a+" ");
    }
    private static void print( long a ) {
        System.err.print(a+"L ");
    }
    private static void print( String s ) {
        System.err.print("\""+s+"\" ");
    }
    private static void print( int[] rs ) {
        if ( rs == null) return;
        System.err.print('{');
        for ( int i= 0; i < rs.length; i++ ) {
            System.err.print(rs[i]);
            if ( i != rs.length-1 )
                System.err.print(", ");
        }
        System.err.println('}');
    }
    private static void print( long[] rs) {
        if ( rs == null ) return;
        System.err.print('{');
        for ( int i= 0; i < rs.length; i++ ) {
            System.err.print(rs[i]);
            if ( i != rs.length-1 )
                System.err.print(", ");
        }
        System.err.println('}');
    }
    private static void print( String[] rs ) {
        if ( rs == null ) return;
        System.err.print('{');
        for ( int i= 0; i < rs.length; i++ ) {
            System.err.print( "\""+rs[i]+"\"" );
            if( i != rs.length-1)
                System.err.print(", ");
        }
        System.err.println('}');
    }
    private static void nl() {
        System.err.println();
    }
// END CUT HERE
}
