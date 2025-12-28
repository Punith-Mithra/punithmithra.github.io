/**
 * Base44 API Client
 * Simplified mock implementation for the application
 */

export interface ContactInquiryData {
  name: string;
  company_name: string;
  email: string;
  phone: string;
  enquiry_type: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image_url?: string;
  description: string;
  created_date?: string;
}

// Mock API client
class Base44Client {
  entities = {
    ContactInquiry: {
      create: async (data: ContactInquiryData) => {
        // Simulate API call
        console.log('Submitting contact inquiry:', data);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: true, data });
          }, 1000);
        });
      },
    },
    Project: {
      list: async (orderBy: string = '-created_date'): Promise<Project[]> => {
        // Simulate API call - return empty array for now
        // The component will use sample data if this returns empty
        console.log('Fetching projects with order:', orderBy);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([]);
          }, 500);
        });
      },
    },
  };
}

export const base44 = new Base44Client();
