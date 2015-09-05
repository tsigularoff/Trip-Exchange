using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Ninject;
using System.Reflection;
using TripExchange.Data;

[assembly: OwinStartup(typeof(TripExchange.WebAPI.Startup))]

namespace TripExchange.WebAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }

        private static StandardKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());
            RegisterMappings(kernel);
            return kernel;
        }

        private static void RegisterMappings(StandardKernel kernel)
        {
            kernel.Bind<ITripExchangeData>().To<TripExchangeData>().WithConstructorArgument("context", c => new TripExchangeDbContext());
        }
    }
}
