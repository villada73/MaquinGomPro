"use client";

import { useState } from "react";
import productsData from "@/data/productos.json";

const WHATSAPP_NUMBER = "5493564521140";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "elevadores", label: "Elevadores" },
  { id: "balanceadoras", label: "Balanceadoras" },
  { id: "desmontadoras", label: "Desmontadoras" },
  { id: "rectificadoras", label: "Rectificadoras" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === "todos" || product.categoria === activeCategory;
    const matchesSearch =
      product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppClick = (productName: string) => {
    const message = `Hola! Me interesa saber más sobre el equipo: ${productName}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0f1115]">
      {/* Header */}
      <header className="bg-[#0f1115] border-b border-[#374151] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-completo.svg" 
                alt="MaquinGom Pro" 
                className="h-12 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-[#f59e0b] uppercase tracking-wider">
                  MaquinGom Pro
                </h1>
                <p className="text-[#9ca3af] font-medium tracking-wide mt-1">
                  Tecnología Confiable para empresas exigentes
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#0f1115] font-bold py-3 px-6 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all uppercase text-sm whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.047 1.24 8.287 3.523l-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961-.961 6.024c-1.17-1.17-2.058-2.05-2.469-3.685L.057 24z" />
              </svg>
              Consultar
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#0a0c0f] border-b border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-8 py-4 overflow-x-auto">
            <a
              href="#"
              className="text-[#f59e0b] font-bold text-sm uppercase tracking-wider whitespace-nowrap"
            >
              Inicio
            </a>
            <a
              href="#catalogo"
              className="text-[#9ca3af] hover:text-white font-medium text-sm uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#nosotros"
              className="text-[#9ca3af] hover:text-white font-medium text-sm uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-[#9ca3af] hover:text-white font-medium text-sm uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0f1115] to-[#1a1c23] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-4">
              Equipamiento para{" "}
              <span className="text-[#f59e0b]">Gomerías y Talleres</span>
            </h2>
            <p className="text-[#9ca3af] text-lg md:text-xl mb-8">
              Venta de elevadores, balanceadoras, desmontadoras y
              rectificadoras de discos de primera calidad. Confianza, servicio
              postventa y seriedad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center bg-[#f59e0b] hover:bg-[#d97706] text-[#0f1115] font-bold py-3 px-8 rounded-md transition-all uppercase text-sm"
              >
                Ver Catálogo
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Quisiera más información sobre los equipos.")}`}
                target="_blank"
                className="inline-flex items-center justify-center bg-[#1a1c23] border border-[#374151] hover:border-[#f59e0b] text-white font-medium py-3 px-8 rounded-md transition-all text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-[#f59e0b]"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.047 1.24 8.287 3.523l-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961-.961 6.024c-1.17-1.17-2.058-2.05-2.469-3.685L.057 24z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-12 bg-[#0f1115]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById("catalogo")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-[#1a1c23] border border-[#374151] hover:border-[#f59e0b] hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)] rounded-xl p-6 transition-all group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#f59e0b]/10 flex items-center justify-center group-hover:bg-[#f59e0b]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#f59e0b]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-bold uppercase text-sm tracking-wide">
                    {cat.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalogo" className="py-12 bg-[#0f1115]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <input
                type="text"
                placeholder="Buscar maquinaria (ej: elevador, balanceadora...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1c23] border border-[#374151] text-white rounded-lg px-4 py-4 pl-12 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all placeholder-[#6b7280] text-base"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#f59e0b] text-[#0f1115] shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                    : "bg-[#1a1c23] border border-[#374151] text-[#9ca3af] hover:bg-[#374151] hover:text-white hover:border-[#f59e0b]/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Section Title */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-1.5 h-8 bg-[#f59e0b] rounded-full inline-block"></span>
            <h3 className="text-2xl font-bold text-white">
              {searchQuery
                ? `Resultados para "${searchQuery}"`
                : activeCategory === "todos"
                ? "Catálogo General"
                : categories.find((c) => c.id === activeCategory)?.label}
            </h3>
            <span className="text-sm font-normal text-[#6b7280]">
              ({filteredProducts.length} equipos)
            </span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <article
                  key={product.id}
                  className="bg-[#1a1c23] rounded-xl overflow-hidden border border-[#374151] hover:border-[#f59e0b] hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)] transition-all group flex flex-col animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="relative h-56 bg-white p-6 flex justify-center items-center">
                    <img 
                      src={`/images/${product.imagen}`}
                      alt={product.nombre}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-black tracking-widest text-[#f59e0b] mb-3 uppercase bg-[#f59e0b]/10 inline-block px-3 py-1 rounded-full w-max">
                      {product.categoria}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-3 leading-tight">
                      {product.nombre}
                    </h4>
                    <p className="text-[#9ca3af] text-sm mb-4 flex-grow line-clamp-3">
                      {product.descripcion}
                    </p>
                    <div className="mt-auto">
                      <button
                        onClick={() => handleWhatsAppClick(product.nombre)}
                        className="w-full text-center bg-[#374151] hover:bg-[#f59e0b] hover:text-[#0f1119] text-white font-bold py-3.5 px-4 rounded-lg transition-colors border border-[#374151] hover:border-[#f59e0b]"
                      >
                        Consultar Precio
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-[#1a1c23] rounded-xl border border-[#374151] p-12 text-center flex flex-col items-center justify-center">
              <div className="text-[#6b7280] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#9ca3af]">
                No encontramos máquinas
              </h4>
              <p className="text-[#6b7280] mt-2">
                Intentá buscar con otra palabra clave o quitá el filtro de
                categoría.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("todos");
                }}
                className="mt-6 font-bold text-[#f59e0b] hover:text-[#d97706] underline decoration-[#f59e0b]/30 underline-offset-4 transition-colors"
              >
                Ver todos los equipos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 bg-[#0a0c0f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-wide mt-2 mb-6">
                Confianza, Servicio y{" "}
                <span className="text-[#f59e0b]">Seriedad</span>
              </h2>
              <p className="text-[#9ca3af] text-lg mb-6">
                En MaquinGom Pro nos dedicamos a distribuir equipamiento
                industrial de primera calidad para gomerías y talleres en todo
                el país.
              </p>
              <p className="text-[#9ca3af] mb-8">
                Contamos con años de experiencia en el sector y nos diferencia
                nuestro compromiso con el servicio postventa y la seriedad en
                cada operación.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1a1c23] rounded-lg p-4 border border-[#374151]">
                  <div className="text-2xl font-black text-[#f59e0b]">12+</div>
                  <div className="text-sm text-[#9ca3af]">Años en el sector</div>
                </div>
                <div className="bg-[#1a1c23] rounded-lg p-4 border border-[#374151]">
                  <div className="text-2xl font-black text-[#f59e0b]">500+</div>
                  <div className="text-sm text-[#9ca3af]">Clientes atendidos</div>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1c23] rounded-xl p-8 border border-[#374151]">
              <h3 className="text-xl font-bold text-white mb-6">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#f59e0b]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#9ca3af]">
                    Asesoramiento personalizado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#f59e0b]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#9ca3af]">
                    Servicio técnico y postventa
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#f59e0b]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#9ca3af]">
                    Garantía en todos los equipos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#f59e0b]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#9ca3af]">
                    Envíos a todo el país
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-[#0f1115]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="text-3xl font-black text-white uppercase tracking-wide mt-2">
              Estamos para ayudarte
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              className="bg-[#1a1c23] rounded-xl p-6 border border-[#374151] hover:border-[#f59e0b] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#f59e0b]"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.047 1.24 8.287 3.523l-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961-.961 6.024c-1.17-1.17-2.058-2.05-2.469-3.685L.057 24z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-[#9ca3af]">3564 521140</p>
              <p className="text-[#f59e0b] text-sm mt-2 group-hover:underline">
                Escribinos →
              </p>
            </a>
            <div className="bg-[#1a1c23] rounded-xl p-6 border border-[#374151]">
              <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f59e0b]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ubicación</h3>
              <p className="text-[#9ca3af]">Córdoba, Argentina</p>
              <p className="text-[#6b7280] text-sm mt-2">
                Entregamos en todo el país
              </p>
            </div>
            <div className="bg-[#1a1c23] rounded-xl p-6 border border-[#374151]">
              <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f59e0b]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Horario</h3>
              <p className="text-[#9ca3af]">Lunes a Viernes</p>
              <p className="text-[#6b7280] text-sm mt-2">09:00 - 18:00 hs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c0f] border-t border-[#374151] py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-black text-white text-xl uppercase tracking-widest">
                MaquinGom Pro
              </p>
              <p className="text-[#6b7280] text-sm mt-1">
                Tecnología Confiable para empresas exigentes
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#1a1c23] border border-[#374151] flex items-center justify-center hover:border-[#f59e0b] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#9ca3af] hover:text-[#f59e0b]"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.047 1.24 8.287 3.523l-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961.961 6.024c1.169-1.169 2.077-2.048 2.468-2.469l6.133-1.574-1.574 6.133c-.42 1.608-1.299 2.836-2.469 3.686l-6.024-.961-.961 6.024c-1.17-1.17-2.058-2.05-2.469-3.685L.057 24z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-[#374151] mt-8 pt-8 text-center">
            <p className="text-[#6b7280] text-sm">
              © 2026 MaquinGom Pro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}