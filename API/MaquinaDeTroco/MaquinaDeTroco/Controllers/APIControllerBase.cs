using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;

namespace API.Controllers;

[ApiController]
[Route( "api[controller]" )]
public class APIControllerBase : ControllerBase {

    private ISender _mediator = null;

    protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();
}