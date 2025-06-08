  import React, { useState, useEffect } from 'react';
  import { ChevronRight, Shield, Clock, Users, Check, Menu, X, Phone, Mail, MapPin, Car, FileText, CreditCard, Star, ArrowRight, CheckCircle } from 'lucide-react';

  const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
      matricula: '',
      tipoVehiculo: '',
      marcaModelo: '',
      nombreComprador: '',
      dniComprador: '',
      emailComprador: '',
      telefonoComprador: '',
      nombreVendedor: '',
      dniVendedor: '',
      emailVendedor: '',
      telefonoVendedor: ''
    });

    const steps = [
      { id: 1, name: 'Vehículo', icon: Car },
      { id: 2, name: 'Datos personales', icon: Users },
      { id: 3, name: 'Documentos', icon: FileText },
      { id: 4, name: 'Revisión', icon: Check },
      { id: 5, name: 'Pago', icon: CreditCard }
    ];

    const testimonials = [
      { name: "María García", age: 28, text: "Increíblemente rápido. En 10 minutos tenía todo listo.", rating: 5 },
      { name: "José Martínez", age: 52, text: "Muy claro y seguro. El gestor me ayudó en todo momento.", rating: 5 },
      { name: "Carmen López", age: 67, text: "Fácil de usar incluso para mí. Muy bien explicado todo.", rating: 5 }
    ];

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const nextStep = () => {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    };

    const prevStep = () => {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">TransferCar</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#proceso" className="text-gray-600 hover:text-blue-600 transition-colors">Cómo funciona</a>
                <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105">
                  Empezar ahora
                </button>
              </nav>

              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 py-4 space-y-3">
                <a href="#proceso" className="block text-gray-600 hover:text-blue-600">Cómo funciona</a>
                <a href="#precios" className="block text-gray-600 hover:text-blue-600">Precios</a>
                <a href="#faq" className="block text-gray-600 hover:text-blue-600">FAQ</a>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  Empezar ahora
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="pt-16 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">100% Legal · Gestor Colegiado · Cumple RGPD</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cambia el nombre de tu coche<br />
              <span className="text-blue-600">en 5 minutos</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Olvídate de colas y papeleos. Transferencia 100% digital con gestor colegiado incluido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setActiveStep(0)}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Empezar transferencia
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-50 transition-colors">
                Simular proceso
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>+5000 transferencias</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span>4.9/5 valoración</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
              Haz el cambio de nombre sin complicaciones
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Introduce los datos",
                  description: "Matrícula, datos del comprador y vendedor. Todo online.",
                  icon: FileText
                },
                {
                  step: "2",
                  title: "Sube los documentos",
                  description: "Nuestro sistema los valida automáticamente.",
                  icon: Shield
                },
                {
                  step: "3",
                  title: "Nosotros hacemos el resto",
                  description: "Tu gestor tramita todo en la DGT. Tú descansas.",
                  icon: Check
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section (Initially hidden, shown when user clicks "Empezar") */}
        {activeStep >= 0 && activeStep < steps.length && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              {/* Progress Stepper */}
              <div className="mb-12">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex-1 relative">
                      <div className="flex items-center">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all
                          ${index <= activeStep 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-500'}
                        `}>
                          {index < activeStep ? <Check className="h-6 w-6" /> : step.id}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`
                            flex-1 h-1 mx-4 transition-all
                            ${index < activeStep ? 'bg-blue-600' : 'bg-gray-200'}
                          `} />
                        )}
                      </div>
                      <p className="text-sm mt-2 text-center font-medium text-gray-600">
                        {step.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {activeStep === 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Datos del vehículo</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Matrícula
                      </label>
                      <input
                        type="text"
                        name="matricula"
                        value={formData.matricula}
                        onChange={handleInputChange}
                        placeholder="1234 ABC"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de vehículo
                      </label>
                      <select
                        name="tipoVehiculo"
                        value={formData.tipoVehiculo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Selecciona...</option>
                        <option value="turismo">Turismo</option>
                        <option value="motocicleta">Motocicleta</option>
                        <option value="furgoneta">Furgoneta</option>
                        <option value="camion">Camión</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marca y modelo
                      </label>
                      <input
                        type="text"
                        name="marcaModelo"
                        value={formData.marcaModelo}
                        onChange={handleInputChange}
                        placeholder="Ej: Seat León"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Datos del comprador</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo
                          </label>
                          <input
                            type="text"
                            name="nombreComprador"
                            value={formData.nombreComprador}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            DNI/NIE
                          </label>
                          <input
                            type="text"
                            name="dniComprador"
                            value={formData.dniComprador}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="emailComprador"
                            value={formData.emailComprador}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            name="telefonoComprador"
                            value={formData.telefonoComprador}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Datos del vendedor</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo
                          </label>
                          <input
                            type="text"
                            name="nombreVendedor"
                            value={formData.nombreVendedor}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            DNI/NIE
                          </label>
                          <input
                            type="text"
                            name="dniVendedor"
                            value={formData.dniVendedor}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="emailVendedor"
                            value={formData.emailVendedor}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            name="telefonoVendedor"
                            value={formData.telefonoVendedor}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Subida de documentos</h3>
                    
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">DNI del comprador (ambas caras)</p>
                        <button className="text-blue-600 font-medium hover:text-blue-700">
                          Seleccionar archivo
                        </button>
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">DNI del vendedor (ambas caras)</p>
                        <button className="text-blue-600 font-medium hover:text-blue-700">
                          Seleccionar archivo
                        </button>
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Permiso de circulación</p>
                        <button className="text-blue-600 font-medium hover:text-blue-700">
                          Seleccionar archivo
                        </button>
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Ficha técnica / ITV</p>
                        <button className="text-blue-600 font-medium hover:text-blue-700">
                          Seleccionar archivo
                        </button>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-sm text-blue-700">
                        <strong>Nota:</strong> Los documentos se procesan automáticamente con OCR. 
                        Asegúrate de que las fotos sean claras y legibles.
                      </p>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Revisión final</h3>
                    
                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <h4 className="font-semibold text-gray-900">Datos del vehículo</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Matrícula:</span>
                          <span className="ml-2 font-medium">{formData.matricula || 'No especificado'}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Tipo:</span>
                          <span className="ml-2 font-medium">{formData.tipoVehiculo || 'No especificado'}</span>
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-gray-600">Marca y modelo:</span>
                          <span className="ml-2 font-medium">{formData.marcaModelo || 'No especificado'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <h4 className="font-semibold text-gray-900">Datos del comprador</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Nombre:</span>
                          <span className="ml-2 font-medium">{formData.nombreComprador || 'No especificado'}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">DNI:</span>
                          <span className="ml-2 font-medium">{formData.dniComprador || 'No especificado'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <h4 className="font-semibold text-gray-900">Datos del vendedor</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Nombre:</span>
                          <span className="ml-2 font-medium">{formData.nombreVendedor || 'No especificado'}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">DNI:</span>
                          <span className="ml-2 font-medium">{formData.dniVendedor || 'No especificado'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm text-gray-600">
                        He revisado que todos los datos son correctos y autorizo el inicio del trámite
                      </label>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Pago seguro</h3>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Transferencia de vehículo</span>
                        <span className="font-semibold">89€</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Gestión DGT</span>
                        <span className="font-semibold">Incluido</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Tasas DGT</span>
                        <span className="font-semibold">55.70€</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-2xl font-bold text-blue-600">144.70€</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Número de tarjeta
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fecha de caducidad
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4" />
                      <span>Pago seguro procesado por Stripe</span>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    disabled={activeStep === 0}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activeStep === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Anterior
                  </button>
                  
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center"
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar y pagar' : 'Siguiente'}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
              Lo que dicen nuestros clientes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}, {testimonial.age} años
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo para transferir tu vehículo?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a más de 5000 personas que ya han confiado en nosotros
            </p>
            <button 
              onClick={() => setActiveStep(0)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Empezar ahora
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
              Preguntas frecuentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "¿Cuánto tarda el proceso?",
                  answer: "El trámite online tarda menos de 10 minutos. Una vez completado, nuestro gestor presenta la documentación en la DGT en 24-48 horas laborables."
                },
                {
                  question: "¿Es legal hacer la transferencia online?",
                  answer: "Totalmente legal. Trabajamos con gestores colegiados autorizados por la DGT. El proceso cumple con toda la normativa vigente."
                },
                {
                  question: "¿Qué documentos necesito?",
                  answer: "DNI de comprador y vendedor, permiso de circulación, ficha técnica/ITV del vehículo. Todo se puede subir con fotos desde el móvil."
                },
                {
                  question: "¿Cuánto cuesta el servicio?",
                  answer: "89€ + tasas DGT (55,70€). Total: 144,70€. Incluye gestión completa, sin colas ni desplazamientos."
                },
                {
                  question: "¿Puedo hacer seguimiento del trámite?",
                  answer: "Sí, te proporcionamos un panel de seguimiento donde puedes ver el estado en tiempo real y contactar con tu gestor."
                }
              ].map((item, index) => (
                <details key={index} className="bg-white rounded-xl shadow-sm">
                  <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors font-medium text-gray-900">
                    {item.question}
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Car className="h-6 w-6" />
                  <span className="text-lg font-bold">TransferCar</span>
                </div>
                <p className="text-gray-400 text-sm">
                  La forma más rápida y segura de transferir tu vehículo en España.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Transferencia de vehículos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Baja de vehículos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Duplicado de permiso</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cambio de domicilio</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Aviso legal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Política de cookies</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>900 123 456</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@transfercar.es</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Madrid, España</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 TransferCar. Todos los derechos reservados. Gestor Colegiado Nº 12345</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/34900123456"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    );
  };

  export default App;