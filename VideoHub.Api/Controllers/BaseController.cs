﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VideoHub.Api.Controllers
{
    [Authorize]
    public class BaseController : Controller
    {
    }
}
