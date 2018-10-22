package bk_solutions.bottomnavigationdemo_v03

import android.content.Context
import android.net.Uri
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.Toast
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.PopupMenu
import android.view.Gravity
import android.widget.VideoView
import android.widget.MediaController;
import bk_solutions.bottomnavigationdemo_v03.R.id.text
import kotlinx.android.synthetic.main.fragment_hbtn.*
import android.content.Context.LAYOUT_INFLATER_SERVICE
import android.support.v4.content.ContextCompat.getSystemService




// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Activities that contain this fragment must implement the
 * [DashboardFragment.OnFragmentInteractionListener] interface
 * to handle interaction events.
 * Use the [DashboardFragment.newInstance] factory method to
 * create an instance of this fragment.
 *
 */
class HbtnFragment : Fragment(), View.OnClickListener {
    var seekvalue  = 1
    var seekvalue2 = 2
    var seekvalue3 = 3
    var seekvalue4 = 4
    var seekvalue5 = 5


    var activityCallback: HbtnFragment.ToolbarListener? = null

    interface ToolbarListener {
        fun onButtonClick(position: Int, text: String)
    }

    override fun onAttach(context: Context?) {
        super.onAttach(context)
        try {
            activityCallback = context as ToolbarListener
        } catch (e: ClassCastException) {
            throw ClassCastException(context?.toString()
                    + " must implement ToolbarListener")
        }
    }

    var gravity = Gravity.CENTER

    fun showPopupMenu(view: View) = PopupMenu(view.context, view, Gravity.CENTER ).run {
        // inflate the layout of the popup window
        //var mPopup = new PopupWindow(getContext());
        menuInflater.inflate(R.menu.popup, menu)
        setOnMenuItemClickListener { item ->
            //Toast.makeText(view.context, "You Clicked : " + item.title, Toast.LENGTH_SHORT).show()
            activityCallback?.onButtonClick(seekvalue,
                "You Clicked new: " + item.title)
            true
        }
        show()
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view: View = inflater!!.inflate(R.layout.fragment_hbtn, container, false)
        //val btn: Button = view.find(R.id.button)
        val btn: Button? = view?.findViewById(R.id.button)
        btn!!.setOnClickListener { v: View -> buttonClicked(v)}
        val btn2: Button? = view?.findViewById(R.id.button2)
        btn2!!.setOnClickListener { v: View -> buttonClicked(v)}
        val btn3: Button? = view?.findViewById(R.id.button3)
        btn3!!.setOnClickListener { v: View -> buttonClicked(v)}
        val btn4: Button? = view?.findViewById(R.id.button4)
        btn4!!.setOnClickListener { v: View -> buttonClicked(v)}
        val btn5: Button? = view?.findViewById(R.id.button5)
        btn5!!.setOnClickListener { v: View -> buttonClicked(v)}
        //btn!!.setOnClickListener(this)
        //btn!!.setOnClickListener { v: View -> showPopupMenu(v)}
        return view
    }

    private fun buttonClicked(view: View) {

        when (view.getId()) {

            R.id.button -> {
                activityCallback?.onButtonClick(seekvalue,
                    "TEXT NEW1")
            }

            R.id.button2 -> {
                activityCallback?.onButtonClick(seekvalue2,
                    "TEXT NEW2")
            }

            R.id.button3 -> {
                activityCallback?.onButtonClick(seekvalue3,
                    "TEXT NEW3")
            }

            R.id.button4 -> {
                activityCallback?.onButtonClick(seekvalue4,
                    "TEXT NEW4")
            }

            R.id.button5 -> {
                activityCallback?.onButtonClick(seekvalue5,
                    "TEXT NEW5")
            }

            else -> {
                activityCallback?.onButtonClick(seekvalue,
                    "TEXT NEW")
            }
        }// do your code
        // do your code
        // do your code
        /*
        activityCallback?.onButtonClick(seekvalue,
            "TEXT NEW")*/
    }


    companion object {
        fun newInstance(): HbtnFragment {
            return HbtnFragment()
        }
    }

    override fun onClick(v: View?) {
        when (v?.id) {
            R.id.button -> {
                Toast.makeText(activity,"Text!",Toast.LENGTH_SHORT).show();
            }

            else -> {
            }
        }
    }

}


/*
class HbtnFragment : Fragment() {

    var activityCallback: HbtnFragment.ToolbarListener? = null

    var seekvalue = 10

    interface ToolbarListener {
        fun onButtonClick(position: Int, text: String)
    }

    override fun onAttach(context: Context?) {
        super.onAttach(context)
        try {
            activityCallback = context as ToolbarListener
        } catch (e: ClassCastException) {
            throw ClassCastException(context?.toString()
                    + " must implement ToolbarListener")
        }
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        // Inflate the layout for this fragment
        val view = inflater?.inflate(R.layout.fragment_hbtn,
            container, false)

        val button: Button? = view?.findViewById(R.id.button)

        button?.setOnClickListener { v: View -> buttonClicked(v)}

        return view
        //return inflater?.inflate(R.layout.fragment_hbtn, container, false)

    }

    private fun buttonClicked(view: View) {
        activityCallback?.onButtonClick(seekvalue,"Yuppy")
    }


    companion object {
        fun newInstance(): HbtnFragment = HbtnFragment()
    }
}
*/