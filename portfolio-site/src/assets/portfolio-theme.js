/**
 * Portfolio Theme - PrimeVue Custom Preset
 * Design Spec: Indigo + Slate + Cyan
 * Fonts: Inter + JetBrains Mono
 */

export const portfolioTheme = {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '0.25rem',
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px'
    },
    emerald: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      900: '#064E3B',
      950: '#022C22'
    }
  },
  semantic: {
    // Primary Colors - Indigo
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    },
    // Secondary Colors - Slate
    surface: {
      0: '#ffffff',
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}'
    },
    // Accent Colors - Cyan
    accent: {
      50: '{cyan.50}',
      100: '{cyan.100}',
      200: '{cyan.200}',
      300: '{cyan.300}',
      400: '{cyan.400}',
      500: '{cyan.500}',
      600: '{cyan.600}',
      700: '{cyan.700}',
      800: '{cyan.800}',
      900: '{cyan.900}',
      950: '{cyan.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{indigo.500}',
          contrastColor: '#ffffff',
          hoverColor: '{indigo.600}',
          activeColor: '{indigo.700}'
        },
        accent: {
          color: '{cyan.500}',
          contrastColor: '#ffffff',
          hoverColor: '{cyan.600}',
          activeColor: '{cyan.700}'
        },
        highlight: {
          background: '{indigo.50}',
          focusBackground: '{indigo.100}',
          color: '{indigo.700}',
          focusColor: '{indigo.800}'
        }
      },
      dark: {
        primary: {
          color: '{indigo.400}',
          contrastColor: '{indigo.900}',
          hoverColor: '{indigo.300}',
          activeColor: '{indigo.200}'
        },
        accent: {
          color: '{cyan.400}',
          contrastColor: '{cyan.900}',
          hoverColor: '{cyan.300}',
          activeColor: '{cyan.200}'
        },
        highlight: {
          background: 'rgba(99, 102, 241, 0.15)',
          focusBackground: 'rgba(99, 102, 241, 0.2)',
          color: 'rgba(255, 255, 255, 0.87)',
          focusColor: 'rgba(255, 255, 255, 0.87)'
        }
      }
    }
  },
  components: {
    // Button Component
    button: {
      root: {
        background: '{primary.color}',
        borderColor: '{primary.color}',
        color: '{primary.contrastColor}',
        hoverBackground: '{primary.hoverColor}',
        hoverBorderColor: '{primary.hoverColor}',
        activeBackground: '{primary.activeColor}',
        activeBorderColor: '{primary.activeColor}',
        borderRadius: '{border.radius.md}',
        gap: '0.5rem',
        paddingBlock: '0.5rem',
        paddingInline: '1rem',
        transitionDuration: '{transition.duration.normal}',
        focusRing: {
          width: '2px',
          style: 'solid',
          color: '{primary.color}',
          offset: '2px',
          shadow: '0 0 0 2px {primary.100}'
        }
      },
      text: {
        hoverBackground: '{primary.50}',
        activeBackground: '{primary.100}'
      },
      outlined: {
        hoverBackground: '{primary.50}',
        activeBackground: '{primary.100}'
      },
      rounded: {
        borderRadius: '9999px'
      }
    },
    // Card Component
    card: {
      root: {
        background: '{surface.0}',
        borderColor: '{surface.200}',
        borderRadius: '{border.radius.xl}',
        color: '{surface.700}',
        shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
      },
      body: {
        padding: '1.5rem',
        gap: '1rem'
      },
      title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '{surface.900}'
      },
      subtitle: {
        fontSize: '0.875rem',
        color: '{surface.500}'
      },
      content: {
        fontSize: '1rem',
        color: '{surface.600}'
      }
    },
    // Input Text
    inputtext: {
      root: {
        background: '{surface.0}',
        borderColor: '{surface.300}',
        borderRadius: '{border.radius.md}',
        color: '{surface.700}',
        paddingBlock: '0.5rem',
        paddingInline: '0.75rem',
        transitionDuration: '{transition.duration.normal}',
        focusBorderColor: '{primary.color}',
        focusOutlineColor: '{primary.100}',
        hoverBorderColor: '{primary.color}'
      }
    },
    // Navbar / Menubar
    menubar: {
      root: {
        background: 'rgba(255, 255, 255, 0.1)',
        borderColor: '{surface.200}',
        borderRadius: '{border.radius.lg}',
        color: '{surface.700}',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        backdropFilter: 'blur(10px)'
      },
      item: {
        background: 'transparent',
        borderRadius: '{border.radius.md}',
        color: '{surface.700}',
        paddingBlock: '0.5rem',
        paddingInline: '0.75rem',
        hoverBackground: '{surface.100}',
        hoverColor: '{primary.color}',
        focusBackground: '{surface.100}',
        focusColor: '{primary.color}'
      },
      submenu: {
        background: '{surface.0}',
        borderColor: '{surface.200}',
        borderRadius: '{border.radius.lg}',
        shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
      }
    },
    // Dialog / Modal
    dialog: {
      root: {
        background: '{surface.0}',
        borderColor: '{surface.200}',
        borderRadius: '{border.radius.2xl}',
        color: '{surface.700}',
        shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      header: {
        background: '{surface.0}',
        borderColor: '{surface.200}',
        padding: '1.25rem',
        borderRadius: '{border.radius.2xl} {border.radius.2xl} 0 0'
      },
      title: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '{surface.900}'
      },
      content: {
        padding: '1.25rem',
        fontSize: '1rem',
        color: '{surface.600}'
      }
    },
    // Badge
    badge: {
      root: {
        background: '{primary.color}',
        borderRadius: '{border.radius.full}',
        color: '{primary.contrastColor}',
        fontSize: '0.75rem',
        fontWeight: '700',
        minWidth: '1.5rem',
        height: '1.5rem'
      }
    },
    // Avatar
    avatar: {
      root: {
        background: '{primary.100}',
        color: '{primary.700}',
        borderRadius: '{border.radius.full}'
      }
    },
    // Progress Bar
    progressbar: {
      root: {
        background: '{surface.200}',
        borderRadius: '{border.radius.full}',
        height: '0.5rem'
      },
      value: {
        background: '{primary.color}'
      }
    },
    // Toast
    toast: {
      root: {
        background: '{surface.0}',
        borderColor: '{surface.200}',
        borderRadius: '{border.radius.lg}',
        color: '{surface.700}',
        shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  css: `
    /* Custom Theme Extensions */
    
    /* Gradient CTA Buttons */
    .p-button-gradient {
      background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%);
      border: none;
      color: white;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .p-button-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
    }
    
    /* Glassmorphism Navigation */
    .glass-nav {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    /* Card Hover Glow Effect */
    .card-glow {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card-glow:hover {
      transform: translateY(-4px);
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
    }
    
    /* Fade In Animation */
    .fade-in {
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Text Gradient */
    .text-gradient {
      background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* Font Families */
    :root {
      --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    }
    
    body {
      font-family: var(--font-primary);
    }
    
    code, pre, .font-mono {
      font-family: var(--font-mono);
    }
  `
};

export default portfolioTheme;
