import React from "react";
import { AlertTriangle } from "lucide-react"; 
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function FallbackPage() {
    return(
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content px-4">
                {/* Icon + Heading */}
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="text-error p-4 rounded-full bg-primary">
                      <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-secondary" />
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    Oops! Page Not Found
                  </h1>
                  <p className="text-base sm:text-lg text-base-content/70 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                  </p>

                  {/* Call to Action */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                    <button
                      onClick={() => window.history.back()}
                      className="btn bt-ghost hover:bg-primary  "
                    >
                      Go Back
                    </button>
                  </div>
                </div>

                {/* Subtle footer note */}
                <p className="mt-12 text-sm text-error text-center">
                  Error Code: <span className="font-medium">404</span>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default FallbackPage