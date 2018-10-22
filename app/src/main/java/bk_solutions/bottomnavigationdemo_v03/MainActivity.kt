package bk_solutions.bottomnavigationdemo_v03

import android.content.Context
import android.content.DialogInterface
import android.os.Bundle
import android.support.design.widget.BottomNavigationView
import android.support.v4.app.Fragment
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import android.support.design.widget.NavigationView
import android.support.v4.view.GravityCompat
import android.support.v4.widget.DrawerLayout
import android.support.v7.app.ActionBar
import android.support.v7.widget.Toolbar
import android.transition.TransitionManager
import android.view.Gravity
import android.view.MenuItem
import android.view.View
import android.widget.Toast
import android.view.LayoutInflater;
import android.widget.PopupWindow;
import android.view.ViewGroup.LayoutParams;
import android.widget.Button
import android.os.Build

import android.graphics.drawable.Drawable;


import android.transition.Slide

import android.widget.*

import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.provider.CalendarContract
import bk_solutions.bottomnavigationdemo_v03.R.layout.activity_main
import bk_solutions.bottomnavigationdemo_v03.R.menu.popup

//import android.support.v4.app.FragmentActivity

class MainActivity : AppCompatActivity(),
    HbtnFragment.ToolbarListener {

    private val mOnNavigationItemSelectedListener = BottomNavigationView.OnNavigationItemSelectedListener { item ->
        when (item.itemId) {
            R.id.navigation_home -> {
                message.setText(R.string.title_home)
                //val HomeFragment = HomeFragment.newInstance()
                //openFragment(bk_solutions.bottomnavigationdemo_v03.HomeFragment.newInstance())
                openFragment(bk_solutions.bottomnavigationdemo_v03.HbtnFragment.newInstance())
                return@OnNavigationItemSelectedListener true
            }
            R.id.navigation_dashboard -> {
                message.setText("Dashboard")
                //val dashboardFragment = DashboardFragment.newInstance()
                openFragment(bk_solutions.bottomnavigationdemo_v03.DashboardFragment.newInstance())
                return@OnNavigationItemSelectedListener true
            }
            R.id.navigation_notifications -> {
                message.setText("Notifications")
                //val natFragment = NotificationsFragment.newInstance()
                openFragment(bk_solutions.bottomnavigationdemo_v03.NotificationsFragment.newInstance())
                return@OnNavigationItemSelectedListener true
            }
            R.id.navigation_prescription -> {
                message.setText("Prescription")
                //val natFragment = NotificationsFragment.newInstance()
                openFragment(bk_solutions.bottomnavigationdemo_v03.PresFragment.newInstance())
                return@OnNavigationItemSelectedListener true
            }
        }
        false
    }

    private fun openFragment(fragment: Fragment) {
        val transaction = supportFragmentManager.beginTransaction()
        transaction.replace(R.id.fragment_container, fragment)
        transaction.addToBackStack(null)
        transaction.commit()
    }

    private lateinit var mDrawerLayout: DrawerLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        /*-------*/

        // Check that the activity is using the layout version with
        // the fragment_container FrameLayout
        if (findViewById<View>(R.id.fragment_container) != null) {

            // However, if we're being restored from a previous state,
            // then we don't need to do anything and should return or else
            // we could end up with overlapping fragments.
            if (savedInstanceState != null) {
                return
            }

            // Create a new Fragment to be placed in the activity layout
            //val firstFragment = bk_solutions.bottomnavigationdemo_v03.HomeFragment()
            val firstFragment = bk_solutions.bottomnavigationdemo_v03.HbtnFragment()

            // In case this activity was started with special instructions from an
            // Intent, pass the Intent's extras to the fragment as arguments
            firstFragment.setArguments(intent.extras)

            // Add the fragment to the 'fragment_container' FrameLayout
            supportFragmentManager.beginTransaction()
                .add(R.id.fragment_container, firstFragment).commit()
        }

        /*------*/

        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener)

        val toolbar: Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)

        val actionbar: ActionBar? = supportActionBar
        actionbar?.apply {
            setDisplayHomeAsUpEnabled(true)
            setHomeAsUpIndicator(R.drawable.ic_outline_menu_24px)
            setTitle("SelDX")
        }

        mDrawerLayout = findViewById(R.id.drawer_layout)
        //actionBar!!.title = "SelDX"


        val navigationView: NavigationView = findViewById(R.id.nav_view)
        navigationView.setNavigationItemSelectedListener { menuItem ->
            // set item as selected to persist highlight
            menuItem.isChecked = true
            // close drawer when item is tapped
            mDrawerLayout.closeDrawers()

            // Handle navigation view item clicks here.
            when (menuItem.itemId) {

                R.id.nav_profile -> {

                    openFragment(bk_solutions.bottomnavigationdemo_v03.NotificationsFragment.newInstance())
                    //Toast.makeText(this, "Profile", Toast.LENGTH_LONG).show()
                }
                R.id.nav_wallet -> {

                    openFragment(bk_solutions.bottomnavigationdemo_v03.DashboardFragment.newInstance())
                    Toast.makeText(this, "History", Toast.LENGTH_LONG).show()
                }
                R.id.nav_offer -> {

                    openFragment(bk_solutions.bottomnavigationdemo_v03.NotificationsFragment.newInstance())
                    Toast.makeText(this, "Notice", Toast.LENGTH_LONG).show()
                }
                R.id.nav_setting -> {
                    openFragment(bk_solutions.bottomnavigationdemo_v03.PresFragment.newInstance())
                    Toast.makeText(this, "Version", Toast.LENGTH_LONG).show()
                }
            }
            // Add code here to update the UI based on the item selected
            // For example, swap UI fragments here

            true
        }


        /*--------------*/


    }

    override fun onButtonClick(fontsize: Int, text: String) {
        var res = "op"
        var res1 = when(fontsize) {
            1 -> {res = "T1"
                pops ()}

            2 -> res = "T2"
            3 -> res = "T3"
            4 -> res = "T4"
            5 -> res = "T5"
            else -> res = "Number too high"
        }
        Toast.makeText(this, res + text, Toast.LENGTH_LONG).show()
    }


    /*override fun onButtonClick(fontsize: Int, text: String) {

        Toast.makeText(this, text, Toast.LENGTH_LONG).show()
    }*/

    //appbar - toolbar button click
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                mDrawerLayout.openDrawer(GravityCompat.START)
                true
            }

            else -> super.onOptionsItemSelected(item)
        }
    }

    public fun pops () {
// Initialize a new layout inflater instance
        val inflater:LayoutInflater = getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater

        // Inflate a custom view using layout inflater
        val view = inflater.inflate(R.layout.popup_window,null)
        // Initialize a new instance of popup window
        val popupWindow = PopupWindow(
            view, // Custom view to show in popup window
            LinearLayout.LayoutParams.WRAP_CONTENT, // Width of popup window
            LinearLayout.LayoutParams.WRAP_CONTENT // Window height
        )
        // Set an elevation for the popup window
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            popupWindow.elevation = 10.0F
        }
        // If API level 23 or higher then execute the code
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
            // Create a new slide animation for popup window enter transition
            val slideIn = Slide()
            slideIn.slideEdge = Gravity.TOP
            popupWindow.enterTransition = slideIn
            // Slide animation for popup window exit transition
            val slideOut = Slide()
            slideOut.slideEdge = Gravity.RIGHT
            popupWindow.exitTransition = slideOut
        }
        // Get the widgets reference from custom view
        val tv = view.findViewById<TextView>(R.id.text_view)

        /* BUTTON*/
        val buttonPopup = view.findViewById<Button>(R.id.button_popup)
        // Set click listener for popup window's text view
        tv.setOnClickListener{
            // Change the text color of popup window's text view
            tv.setTextColor(Color.RED)
        }
        // Set a click listener for popup's button widget
        buttonPopup.setOnClickListener{
            // Dismiss the popup window
            openFragment(bk_solutions.bottomnavigationdemo_v03.DashboardFragment.newInstance())
            popupWindow.dismiss()
        }
        /* BUTTON*/

        /* BUTTON*/
        val buttonPopup2 = view.findViewById<Button>(R.id.button_popup2)
        // Set a click listener for popup's button widget
        buttonPopup2.setOnClickListener{
            // Dismiss the popup window
            openFragment(bk_solutions.bottomnavigationdemo_v03.NotificationsFragment.newInstance())
            popupWindow.dismiss()
        }
        /* BUTTON*/

        // Set a dismiss listener for popup window
        popupWindow.setOnDismissListener {
            Toast.makeText(applicationContext,"Popup closed",Toast.LENGTH_SHORT).show()
        }

        // Finally, show the popup window on app
        TransitionManager.beginDelayedTransition(container)
        popupWindow.showAtLocation(
            container, // Location to display popup window
            Gravity.CENTER, // Exact position of layout to display popup
            0, // X offset
            0 // Y offset
        )
        /*
        popupWindow.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT));
        popupWindow.setOutsideTouchable(true);
        popupWindow.setFocusable(true);*/
    }




}
