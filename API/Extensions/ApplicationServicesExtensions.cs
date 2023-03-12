using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;
using Infrastructure.Data;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services) 
        {
            services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>))); 
            services.AddScoped<IProductRepository, ProductRepository>();
            return services;
        }
        
    
    }
}