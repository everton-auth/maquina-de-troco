using API.Common.Middlewares;
using Application;
using Infraestructure;

var builder = WebApplication.CreateBuilder( args );

// Add services to the container.
builder.Services.AddControllers().AddJsonOptions( opts => opts.JsonSerializerOptions.PropertyNamingPolicy = null );

builder.Services.AddEndpointsApiExplorer();
// Registra as Injeções de Dependências e configurações iniciais dos projetos
builder.Services.AddApplication();
builder.Services.AddInfrastructure( builder.Configuration );
builder.Services.AddSwaggerDocument();

var app = builder.Build();

app.UseCors( opts => {
    opts.AllowAnyHeader();
    opts.AllowAnyMethod();
    opts.AllowAnyOrigin();
} );

if( !app.Environment.IsDevelopment() ) {

    app.UseHttpsRedirection();
}

app.UseOpenApi();
app.UseSwaggerUi3();

app.UseStatusCodePages();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.UseExceptionMiddleware();


app.Run();