using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CheapBooks.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Results()
        {
            return View();
        }

        public ActionResult Signup()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult reactTest()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}