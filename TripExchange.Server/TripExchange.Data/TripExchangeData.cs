namespace TripExchange.Data
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;    
    using System.Threading.Tasks;
    using TripExchange.Data.Repositories;
    using TripExchange.Models;

    public class TripExchangeData : ITripExchangeData
    {
        private DbContext context;
        private IDictionary<Type, object> repositories;
        private TripExchangeDbContext ctx;

        public TripExchangeData(DbContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();            
        }

        public IRepository<ApplicationUser> Users
        {
            get
            {
                return this.GetRepository<ApplicationUser>();
            }
        }

        public IRepository<Trip> Trips
        {
            get
            {
                return this.GetRepository<Trip>();
            }
        }

        public IRepository<City> Cities
        {
            get
            {
                return this.GetRepository<City>();
            }
        }        

        public int SaveChanges()
        {   
            return this.context.SaveChanges();
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            var typeOfRepository = typeof(T);
            if (!this.repositories.ContainsKey(typeOfRepository))
            {
                var newRepository = Activator.CreateInstance(typeof(EFRepository<T>), context);
                this.repositories.Add(typeOfRepository, newRepository);
            }

            return (IRepository<T>)this.repositories[typeOfRepository];
        }    
    }
}
