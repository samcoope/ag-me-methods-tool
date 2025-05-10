// M&E Methods Decision Tool Front-End (React + TailwindCSS)
// Includes filter flow, PDF export, and shareable URL support

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, ChevronLeft, Download, Share2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { useSearchParams } from 'react-router-dom';

... // truncated for brevity, as in canvas
