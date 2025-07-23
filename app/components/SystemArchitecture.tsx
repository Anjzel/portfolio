'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'SkinTech: Real-Time Facial Skin Analysis and Skincare Recommendation System',
							description: 'It performs real-time facial skin analysis using deep learning and recommends personalized skincare products based on the detected skin type and sensitivity.',
							details: [
								'Real-time face capture using webcam',
								'Skin type prediction using EfficientNetB2',
								'Personalized skincare product recommendations',
								'PDF export of analysis results and recommendations',
							],
							tech: ['Python', 'Flask', 'TensorFlow', 'Javascript', 'HTML', 'CSS'],
						},

						{
							title: 'GoldRush: Inventory and Sales Management System',
							description: 'A Java-based desktop application built with NetBeans, designed to help businesses efficiently manage their inventory and point-of-sale (POS) operations through a clean, user-friendly interface.',
							details: [
								'User authentication and role-based access (Admin & Employee)',
								'Product ordering, payment, and returns (Full POS functionality)',
								'Inventory control: add, restock, modify, void products',
								'Sales reports and graph visualizations',
								'Low stock alerts and sales history tracking',
								'Backup & restore for database using SQL files',
							],
							tech: ['MySQL','Java','Java Swing','NetBeans'],
						},
						
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Features:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
