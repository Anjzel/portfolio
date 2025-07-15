'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="p-0 m-0 ">
			<div className="max-w-6xl mx-auto m-0 p-0">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400"></h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								
							>
								
							</motion.div>
							<motion.div
								
							>
								
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400"></h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								
							>
								
								
							</motion.div>
							<motion.div
								
							>
								
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400"></h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								
							>
								
							</motion.div>
							<motion.div
								
							>
								
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
