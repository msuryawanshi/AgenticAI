using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AgenticAI.Pages
{
    public class indexModel : PageModel
    {
        private readonly ILogger<indexModel> _loggerInstance; // Renamed to resolve ambiguity  

        public indexModel(ILogger<indexModel> logger)
        {
            _loggerInstance = logger;
        }

        public void OnGet()
        {

        }
    }
}
