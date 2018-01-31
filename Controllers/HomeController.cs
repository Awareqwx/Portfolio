using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View("index");
        }

        [HttpGet]
        [Route("/about")]
        public IActionResult About()
        {
            return View("about");
        }

        [HttpGet]
        [Route("/projects")]
        public IActionResult Projects()
        {
            return View("projects");
        }

        [HttpGet]
        [Route("/contact")]
        public IActionResult Contact()
        {
            return View("contact");
        }
    }
}
