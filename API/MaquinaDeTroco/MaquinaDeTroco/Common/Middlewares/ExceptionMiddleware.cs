
using Application.Commons.Exceptions;
using Newtonsoft.Json;

namespace API.Common.Middlewares;
public class ExceptionMiddleware {
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;

    public ExceptionMiddleware( RequestDelegate next , ILogger<ExceptionMiddleware> logger ) {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync( HttpContext httpContext ) {
        try {
            await _next( httpContext );
        } catch( Exception e ) {
            _logger.LogCritical( e.Message , e );
            if( e.InnerException != null )
                _logger.LogCritical( e.InnerException.Message , e.InnerException );
            var exceptionBase = new ExceptionBase {
                Message = e.Message ,
                Title = e.GetType().GetProperty( "Title" )?.GetValue( e ) as string
            };
            httpContext.Response.ContentType = "application/json";

            httpContext.Response.StatusCode = e.GetType().GetProperty( "StatusCode" ) != null
              ? ( int ) e.GetType().GetProperty( "StatusCode" ).GetValue( e )
              : 500;

            var json = JsonConvert.SerializeObject( exceptionBase );
            await httpContext.Response.WriteAsync( json );
        }
    }
}

public static class ExceptionMiddlewareExtensions {
    public static IApplicationBuilder UseExceptionMiddleware( this IApplicationBuilder builder ) {
        return builder.UseMiddleware<ExceptionMiddleware>();
    }
}

