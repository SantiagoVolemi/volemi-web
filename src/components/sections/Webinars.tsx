import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const ProximosWebinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos simulados para demostración - reemplazar con llamada real a Demio API
  const mockWebinars = [
    {
      id: 1,
      title: "Cómo elegir la universidad adecuada",
      date: "2025-07-15T18:00:00Z",
      image: null,
      link: "https://event.demio.com/registro1"
    },
    {
      id: 2,
      title: "Becas y financiamiento para estudiantes",
      date: "2025-07-22T19:30:00Z",
      image: null,
      link: "https://event.demio.com/registro2"
    },
    {
      id: 3,
      title: "Preparación para exámenes de admisión",
      date: "2025-08-05T17:00:00Z",
      image: null,
      link: "https://event.demio.com/registro3"
    }
  ];

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        setLoading(true);
        
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Aquí iría la llamada real a la API de Demio
        /*
        const response = await fetch('https://my.demio.com/api/v1/events', {
          headers: {
            'Api-Key': 'YOUR_DEMIO_API_KEY',
            'Api-Secret': 'YOUR_DEMIO_API_SECRET'
          }
        });
        const data = await response.json();
        setWebinars(data.events || []);
        */
        
        // Por ahora usamos datos simulados
        setWebinars(mockWebinars);
        
      } catch (err) {
        setError('Error al cargar los webinars');
        console.error('Error fetching webinars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Bogota'
    };
    
    return date.toLocaleDateString('es-ES', options).replace(',', ' a las');
  };

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0033A0]"></div>
    </div>
  );

  const WebinarCard = ({ webinar }) => (
    <div className="flex-shrink-0 w-full md:w-96 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      {/* Imagen del evento */}
      <div className="w-full h-40 bg-gradient-to-r from-[#0033A0] to-blue-600 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
        {webinar.image ? (
          <img 
            src={webinar.image} 
            alt={webinar.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white text-center">
            <Users size={40} className="mx-auto mb-2" />
            <span className="text-sm font-medium">Webinar</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="space-y-4">
        <h3 className="font-inter font-semibold text-lg text-gray-900 line-clamp-2">
          {webinar.title}
        </h3>
        
        <div className="flex items-center text-gray-600 text-sm">
          <Calendar size={16} className="mr-2 text-[#0033A0]" />
          <span className="font-inter">{formatDate(webinar.date)}</span>
        </div>

        <button 
          onClick={() => window.open(webinar.link, '_blank')}
          className="w-full bg-[#0033A0] hover:bg-blue-800 text-white font-inter font-medium py-3 px-6 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:ring-offset-2"
        >
          Registrarse
        </button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter font-bold text-3xl text-gray-900 mb-8 text-center">
            Próximos Webinars
          </h2>
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter font-bold text-3xl text-gray-900 mb-8 text-center">
            Próximos Webinars
          </h2>
          <div className="text-center py-12">
            <p className="font-inter text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!webinars || webinars.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter font-bold text-3xl text-gray-900 mb-8 text-center">
            Próximos Webinars
          </h2>
          <div className="text-center py-12">
            <Clock size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="font-inter text-lg text-gray-600">
              No hay webinars programados por ahora. ¡Vuelve pronto!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-inter font-bold text-3xl text-gray-900 mb-8 text-center">
          Próximos Webinars
        </h2>
        
        {/* Contenedor con scroll horizontal en móviles */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {webinars.map((webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProximosWebinars;